"use client";

import { useState } from "react";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/prices";
import { formatCurrency } from "@/lib/calculator";

interface ResultsTableProps {
  quotas: Record<string, { basic: number; personal: number }>;
  percentage: number;
  tierName: string;
  equivalentIncome: number;
}

export function ResultsTable({
  quotas,
  percentage,
  tierName,
  equivalentIncome,
}: ResultsTableProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(["escolaritzacio", "menjador"])
  );

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(categoryId)) {
        next.delete(categoryId);
      } else {
        next.add(categoryId);
      }
      return next;
    });
  };

  const percentageColor = percentage <= 0.25
    ? "text-emerald-600"
    : percentage <= 0.55
    ? "text-amber-600"
    : "text-primary";

  const percentageBg = percentage <= 0.25
    ? "bg-emerald-500"
    : percentage <= 0.55
    ? "bg-amber-500"
    : "bg-primary";

  return (
    <div className="space-y-6 print:space-y-3">
      {/* Summary Card */}
      <div className="p-8 rounded-3xl bg-white shadow-xl shadow-gray-100/50 border border-gray-100 print:shadow-none print:p-4 print:rounded-none print:border print:border-gray-300">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2 print:text-base print:mb-3">
          <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm print:hidden">2</span>
          <span className="hidden print:inline font-bold">Resum del càlcul</span>
          <span className="print:hidden">El teu resum</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-6 print:grid-cols-3 print:gap-4">
          <div className="p-4 rounded-2xl bg-gray-50 print:p-2 print:rounded-none print:bg-transparent print:border-r print:border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Renda equivalent</p>
            <p className="text-2xl font-bold text-gray-900 print:text-lg">{formatCurrency(equivalentIncome)}</p>
            <p className="text-xs text-gray-400 mt-1 print:hidden">Ajustada per membres</p>
          </div>

          <div className="p-4 rounded-2xl bg-gray-50 print:p-2 print:rounded-none print:bg-transparent print:border-r print:border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Tram de renda</p>
            <p className="text-2xl font-bold text-gray-900 print:text-lg">{tierName}</p>
            <p className="text-xs text-gray-400 mt-1 print:hidden">Basat en IRSC</p>
          </div>

          <div className={`p-4 rounded-2xl bg-gradient-to-br print:p-2 print:rounded-none print:bg-transparent ${
            percentage <= 0.25 ? "from-emerald-50 to-emerald-100/50" :
            percentage <= 0.55 ? "from-amber-50 to-amber-100/50" :
            "from-orange-50 to-orange-100/50"
          }`}>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Percentatge aplicat</p>
            <div className="flex items-end gap-2">
              <p className={`text-3xl font-bold print:text-lg ${percentageColor} print:text-gray-900`}>
                {(percentage * 100).toFixed(0)}%
              </p>
              <span className="text-sm text-gray-400 mb-1 print:hidden">del preu base</span>
            </div>
            {/* Progress bar - hide on print */}
            <div className="mt-3 h-2 bg-white/80 rounded-full overflow-hidden print:hidden">
              <div
                className={`h-full ${percentageBg} rounded-full transition-all duration-500`}
                style={{ width: `${percentage * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="p-8 rounded-3xl bg-white shadow-xl shadow-gray-100/50 border border-gray-100 print:shadow-none print:p-4 print:rounded-none print:border print:border-gray-300">
        <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2 print:text-base print:mb-3">
          <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm print:hidden">3</span>
          <span className="hidden print:inline font-bold">Detall de quotes</span>
          <span className="print:hidden">Detall de quotes</span>
        </h2>

        <div className="space-y-3 print:space-y-2">
          {SERVICE_CATEGORIES.map((category) => {
            const isExpanded = expandedCategories.has(category.id);

            return (
              <div
                key={category.id}
                className="rounded-2xl border border-gray-100 overflow-hidden print:rounded-none print:border-0 print:border-b print:border-gray-200"
              >
                {/* Category Header */}
                <button
                  type="button"
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 transition-colors text-left print:p-2 print:bg-gray-100 print:pointer-events-none"
                >
                  <span className="font-medium text-gray-900 print:text-sm">{category.name}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 transition-transform print:hidden ${isExpanded ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Category Content - always show on print */}
                <div className={`p-4 space-y-2 print:p-2 print:space-y-1 print:block ${isExpanded ? "animate-in fade-in slide-in-from-top-2 duration-200" : "hidden print:block"}`}>
                    {"services" in category && category.services?.map((serviceKey) => {
                      const service = SERVICES[serviceKey];
                      const quota = quotas[serviceKey];
                      if (!service || !quota) return null;

                      return (
                        <ServiceRow
                          key={serviceKey}
                          name={service.name}
                          basic={quota.basic}
                          personal={quota.personal}
                        />
                      );
                    })}

                    {"subsections" in category && category.subsections?.map((subsection, idx) => (
                      <div key={subsection.name}>
                        {idx > 0 && <div className="my-3 border-t border-gray-100" />}
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2 px-2">
                          {subsection.name}
                        </p>
                        {subsection.services.map((serviceKey) => {
                          const service = SERVICES[serviceKey];
                          const quota = quotas[serviceKey];
                          if (!service || !quota) return null;

                          return (
                            <ServiceRow
                              key={serviceKey}
                              name={service.name}
                              basic={quota.basic}
                              personal={quota.personal}
                            />
                          );
                        })}
                      </div>
                    ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend - hide on print */}
        <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-6 text-xs text-gray-500 print:hidden">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-gray-200" />
            <span>Quota bàsica (preu base)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-primary" />
            <span>Quota personal (el que pagues)</span>
          </div>
        </div>

        {/* Print-only legend */}
        <div className="hidden print:flex mt-4 pt-4 border-t border-gray-200 gap-8 text-xs text-gray-500">
          <span>Quota bàsica = preu sense descompte</span>
          <span>Quota personal = import a pagar</span>
        </div>
      </div>
    </div>
  );
}

function ServiceRow({ name, basic, personal }: { name: string; basic: number; personal: number }) {
  const savings = basic - personal;
  const savingsPercent = basic > 0 ? ((savings / basic) * 100).toFixed(0) : "0";

  return (
    <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors group print:p-1 print:rounded-none">
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-700 truncate print:text-xs">{name}</p>
        {savings > 0 && (
          <p className="text-xs text-emerald-600 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity print:hidden">
            Estalvies {formatCurrency(savings)} ({savingsPercent}%)
          </p>
        )}
      </div>
      <div className="flex items-center gap-4 ml-4 print:gap-6">
        <span className="text-sm text-gray-400 tabular-nums print:text-xs">{formatCurrency(basic)}</span>
        <span className="text-sm font-semibold text-primary tabular-nums min-w-[70px] text-right print:text-xs print:text-gray-900">
          {formatCurrency(personal)}
        </span>
      </div>
    </div>
  );
}
