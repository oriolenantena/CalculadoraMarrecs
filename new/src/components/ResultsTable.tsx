"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  return (
    <div className="space-y-6">
      {/* Summary Card */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Resum del càlcul</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground">Renda equivalent</p>
              <p className="text-xl font-semibold">{formatCurrency(equivalentIncome)}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Tram de renda</p>
              <p className="text-xl font-semibold">{tierName}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Percentatge aplicat</p>
              <p className="text-xl font-semibold">{(percentage * 100).toFixed(0)}%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Services Tables */}
      {SERVICE_CATEGORIES.map((category) => (
        <Card key={category.id}>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{category.name}</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/10">
                  <TableHead className="font-semibold">Servei</TableHead>
                  <TableHead className="text-right font-semibold">Quota bàsica</TableHead>
                  <TableHead className="text-right font-semibold">Quota personal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {"services" in category &&
                  category.services?.map((serviceKey) => {
                    const service = SERVICES[serviceKey];
                    const quota = quotas[serviceKey];
                    if (!service || !quota) return null;
                    return (
                      <TableRow key={serviceKey}>
                        <TableCell>{service.name}</TableCell>
                        <TableCell className="text-right">
                          {formatCurrency(quota.basic)}
                        </TableCell>
                        <TableCell className="text-right font-medium text-primary">
                          {formatCurrency(quota.personal)}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {"subsections" in category &&
                  category.subsections?.map((subsection) => (
                    <>
                      <TableRow key={subsection.name} className="bg-muted/50">
                        <TableCell colSpan={3} className="font-medium text-sm">
                          {subsection.name}
                        </TableCell>
                      </TableRow>
                      {subsection.services.map((serviceKey) => {
                        const service = SERVICES[serviceKey];
                        const quota = quotas[serviceKey];
                        if (!service || !quota) return null;
                        return (
                          <TableRow key={serviceKey}>
                            <TableCell className="pl-6">{service.name}</TableCell>
                            <TableCell className="text-right">
                              {formatCurrency(quota.basic)}
                            </TableCell>
                            <TableCell className="text-right font-medium text-primary">
                              {formatCurrency(quota.personal)}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </>
                  ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
