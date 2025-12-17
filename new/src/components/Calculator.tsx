"use client";

import { useState, useMemo } from "react";
import { InputSection } from "./InputSection";
import { ResultsTable } from "./ResultsTable";
import { Button } from "@/components/ui/button";
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <InputSection
        income={income}
        familyMembers={familyMembers}
        onIncomeChange={setIncome}
        onFamilyMembersChange={setFamilyMembers}
      />

      {/* Results Section */}
      {showResults && (
        <>
          <div className="flex justify-end print:hidden">
            <Button onClick={handlePrint} variant="outline">
              Imprimir
            </Button>
          </div>

          <ResultsTable
            quotas={calculationResult.quotas}
            percentage={calculationResult.percentage}
            tierName={calculationResult.tierName}
            equivalentIncome={calculationResult.equivalentIncome}
          />
        </>
      )}

      {/* Prompt to enter data */}
      {!showResults && (
        <div className="text-center p-8 bg-muted/50 rounded-lg">
          <p className="text-muted-foreground">
            Introdueix la renda i el nombre de membres de la unitat familiar per
            veure les quotes personalitzades.
          </p>
        </div>
      )}
    </div>
  );
}
