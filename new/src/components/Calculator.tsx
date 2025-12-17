"use client";

import { useState, useMemo } from "react";
import { InputSection } from "./InputSection";
import { ResultsTable } from "./ResultsTable";
import {
  calculateAllQuotas,
  calculateEquivalentIncome,
  getTierPercentage,
  getTierName,
} from "@/lib/calculator";

export function Calculator() {
  const [income, setIncome] = useState<number>(0);
  const [familyMembers, setFamilyMembers] = useState<number>(3);

  // Calculate all values when inputs change
  const calculationResult = useMemo(() => {
    if (income <= 0 || familyMembers < 2) {
      return null;
    }

    const equivalentIncome = calculateEquivalentIncome(income, familyMembers);
    const percentage = getTierPercentage(equivalentIncome);
    const tierName = getTierName(equivalentIncome);
    const quotas = calculateAllQuotas(income, familyMembers);

    return {
      equivalentIncome,
      percentage,
      tierName,
      quotas,
    };
  }, [income, familyMembers]);

  const showResults = calculationResult !== null;

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <InputSection
        income={income}
        familyMembers={familyMembers}
        onIncomeChange={setIncome}
        onFamilyMembersChange={setFamilyMembers}
      />

      {/* Results Section */}
      {showResults && (
        <ResultsTable
          quotas={calculationResult.quotas}
          percentage={calculationResult.percentage}
          tierName={calculationResult.tierName}
          equivalentIncome={calculationResult.equivalentIncome}
        />
      )}

      {/* Empty State - hide on print */}
      {!showResults && (
        <div className="p-12 rounded-3xl bg-white shadow-xl shadow-gray-100/50 border border-gray-100 text-center print:hidden">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Calcula les teves quotes
          </h3>
          <p className="text-gray-500 max-w-sm mx-auto">
            Introdueix la renda bruta anual i el nombre de membres de la teva família per veure les quotes personalitzades.
          </p>
        </div>
      )}

      {/* Print Button (only when results showing) - hide on print */}
      {showResults && (
        <div className="flex justify-center print:hidden">
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Imprimir resultats
          </button>
        </div>
      )}
    </div>
  );
}
