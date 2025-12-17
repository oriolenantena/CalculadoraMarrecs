"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
    <div className="grid gap-6 md:grid-cols-2">
      {/* Income Input */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="income" className="text-base font-medium">
                Renda bruta anual de la unitat familiar
              </Label>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 rounded-full"
                onClick={() => setShowIncomeHelp(!showIncomeHelp)}
                aria-label="Ajuda sobre la renda"
              >
                <img src="/images/help.png" alt="" className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Input
                id="income"
                type="number"
                min="0"
                step="100"
                value={income || ""}
                onChange={(e) => onIncomeChange(Number(e.target.value) || 0)}
                placeholder="Ex: 32000"
                className="pr-8 text-lg"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                €
              </span>
            </div>
            {showIncomeHelp && (
              <div className="mt-3 p-3 bg-muted rounded-lg text-sm">
                <p className="font-medium mb-2">
                  Dades de la Renda corresponent a l&apos;any anterior
                </p>
                <p>
                  Els ingressos familiars s&apos;obtindran amb la suma de les caselles{" "}
                  <strong>435</strong> (base imposable general) i{" "}
                  <strong>460</strong> (base imposable de l&apos;estalvi) de la
                  declaració de la renda, de cadascuna de les persones membres del
                  nucli familiar, corresponent a l&apos;exercici de l&apos;any anterior al
                  del curs escolar en el que es vulgui sol·licitar l&apos;ajuda.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Family Members Input */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="familyMembers" className="text-base font-medium">
                Membres de la unitat familiar
              </Label>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0 rounded-full"
                onClick={() => setShowFamilyHelp(!showFamilyHelp)}
                aria-label="Ajuda sobre membres"
              >
                <img src="/images/help.png" alt="" className="h-5 w-5" />
              </Button>
            </div>
            <Input
              id="familyMembers"
              type="number"
              min="2"
              max="15"
              value={familyMembers || ""}
              onChange={(e) => onFamilyMembersChange(Number(e.target.value) || 2)}
              placeholder="Ex: 3"
              className="text-lg"
            />
            {showFamilyHelp && (
              <div className="mt-3 p-3 bg-muted rounded-lg text-sm">
                <p className="font-medium mb-2">
                  Inclou persones progenitores, germans/es, infants i persones
                  majors d&apos;edat amb discapacitat
                </p>
                <p>
                  Es consideren membres de la unitat familiar, a més de
                  l&apos;infant, els pares, mares, tutors/es o persones encarregades
                  de la guarda i custòdia i germans/es solters/es menors de 25
                  anys que convisquin al mateix domicili en el moment de
                  formalitzar la matrícula, i majors d&apos;edat quan es tracti de
                  persones amb discapacitat.
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
