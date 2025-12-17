"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface InputSectionProps {
  income: number;
  familyMembers: number;
  onIncomeChange: (value: number) => void;
  onFamilyMembersChange: (value: number) => void;
}

export function InputSection({
  income,
  familyMembers,
  onIncomeChange,
  onFamilyMembersChange,
}: InputSectionProps) {
  const [showIncomeHelp, setShowIncomeHelp] = useState(false);
  const [showFamilyHelp, setShowFamilyHelp] = useState(false);

  return (
    <div className="p-8 rounded-3xl bg-white shadow-xl shadow-gray-100/50 border border-gray-100 print:shadow-none print:p-4 print:rounded-none print:border-b print:border-t-0 print:border-x-0">
      <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2 print:text-base print:mb-3">
        <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white text-sm print:hidden">1</span>
        <span className="hidden print:inline font-bold">Dades de la família:</span>
        <span className="print:hidden">Introdueix les dades de la teva família</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 print:flex print:gap-12 print:justify-start">
        {/* Income Input */}
        <div className="space-y-3 print:space-y-0">
          <div className="flex items-center justify-between print:hidden">
            <Label htmlFor="income" className="text-sm font-medium text-gray-700">
              Renda bruta anual
            </Label>
            <button
              type="button"
              className="text-xs text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
              onClick={() => setShowIncomeHelp(!showIncomeHelp)}
            >
              {showIncomeHelp ? "Amagar" : "Com es calcula?"}
              <svg className={`w-3 h-3 transition-transform ${showIncomeHelp ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Interactive input - hidden on print */}
          <div className="relative group print:hidden">
            <Input
              id="income"
              type="number"
              min="0"
              step="100"
              value={income || ""}
              onChange={(e) => onIncomeChange(Number(e.target.value) || 0)}
              placeholder="0"
              className="h-14 text-2xl font-semibold pl-4 pr-12 rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 transition-all"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
              €
            </span>
          </div>

          {/* Print-only static display */}
          <div className="hidden print:block">
            <span className="text-sm text-gray-600">Renda bruta anual: </span>
            <span className="font-semibold">{income > 0 ? `${income.toLocaleString("ca-ES")} €` : "—"}</span>
          </div>

          {showIncomeHelp && (
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-100 text-sm animate-in fade-in slide-in-from-top-2 duration-200 print:hidden">
              <p className="font-medium text-amber-900 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Dades de la declaració de renda
              </p>
              <p className="text-amber-800 leading-relaxed">
                Suma les caselles <span className="font-semibold bg-amber-200/50 px-1.5 py-0.5 rounded">435</span> (base imposable general) i <span className="font-semibold bg-amber-200/50 px-1.5 py-0.5 rounded">460</span> (base imposable de l&apos;estalvi) de tots els membres del nucli familiar.
              </p>
            </div>
          )}

          {income > 0 && (
            <p className="text-xs text-gray-500 flex items-center gap-1.5 print:hidden">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {income.toLocaleString("ca-ES")} € anuals
            </p>
          )}
        </div>

        {/* Family Members Input */}
        <div className="space-y-3 print:space-y-0">
          <div className="flex items-center justify-between print:hidden">
            <Label htmlFor="familyMembers" className="text-sm font-medium text-gray-700">
              Membres de la família
            </Label>
            <button
              type="button"
              className="text-xs text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
              onClick={() => setShowFamilyHelp(!showFamilyHelp)}
            >
              {showFamilyHelp ? "Amagar" : "Qui compta?"}
              <svg className={`w-3 h-3 transition-transform ${showFamilyHelp ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Interactive input - hidden on print */}
          <div className="flex items-center gap-3 print:hidden">
            <button
              type="button"
              onClick={() => onFamilyMembersChange(Math.max(2, familyMembers - 1))}
              className="w-14 h-14 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-2xl font-medium transition-colors flex items-center justify-center"
              disabled={familyMembers <= 2}
            >
              −
            </button>
            <div className="flex-1 relative">
              <Input
                id="familyMembers"
                type="number"
                min="2"
                max="15"
                value={familyMembers || ""}
                onChange={(e) => onFamilyMembersChange(Math.max(2, Number(e.target.value) || 2))}
                className="h-14 text-2xl font-semibold text-center rounded-xl border-gray-200 focus:border-primary focus:ring-primary/20 transition-all"
              />
            </div>
            <button
              type="button"
              onClick={() => onFamilyMembersChange(Math.min(15, familyMembers + 1))}
              className="w-14 h-14 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 text-2xl font-medium transition-colors flex items-center justify-center"
              disabled={familyMembers >= 15}
            >
              +
            </button>
          </div>

          {/* Print-only static display */}
          <div className="hidden print:block">
            <span className="text-sm text-gray-600">Membres de la família: </span>
            <span className="font-semibold">{familyMembers} persones</span>
          </div>

          {showFamilyHelp && (
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 text-sm animate-in fade-in slide-in-from-top-2 duration-200 print:hidden">
              <p className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Qui s&apos;inclou?
              </p>
              <ul className="text-blue-800 space-y-1 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  L&apos;infant matriculat
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  Pares, mares o tutors/es
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  Germans/es solters menors de 25 anys
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  Majors d&apos;edat amb discapacitat
                </li>
              </ul>
            </div>
          )}

          <p className="text-xs text-gray-500 flex items-center gap-1.5 print:hidden">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {familyMembers} {familyMembers === 1 ? "persona" : "persones"} a la unitat familiar
          </p>
        </div>
      </div>
    </div>
  );
}
