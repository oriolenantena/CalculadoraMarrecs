import { IRSC_BASE, TIERS, SERVICES, Service } from './prices';

/**
 * Calculate equivalent income adjusted for family size
 * Formula: income / (sqrt(familyMembers) / sqrt(2))
 */
export function calculateEquivalentIncome(income: number, familyMembers: number): number {
  if (familyMembers <= 0) return 0;
  const coefficient = Math.sqrt(familyMembers) / Math.sqrt(2);
  return income / coefficient;
}

/**
 * Get the IRSC multiple for an equivalent income
 * Returns how many times the IRSC base the income represents
 */
export function getIRSCMultiple(equivalentIncome: number): number {
  return equivalentIncome / IRSC_BASE;
}

/**
 * Get the tier percentage based on equivalent income
 * Uses fixed percentages per tier (no interpolation)
 */
export function getTierPercentage(equivalentIncome: number): number {
  const irscMultiple = getIRSCMultiple(equivalentIncome);

  for (const tier of TIERS) {
    if (irscMultiple <= tier.max) {
      return tier.percentage;
    }
  }

  return 1.0; // Default to 100% if above all tiers
}

/**
 * Get the tier name for display purposes
 */
export function getTierName(equivalentIncome: number): string {
  const irscMultiple = getIRSCMultiple(equivalentIncome);

  if (irscMultiple <= 1) return "0-1 IRSC";
  if (irscMultiple <= 2) return "1-2 IRSC";
  if (irscMultiple <= 3) return "2-3 IRSC";
  if (irscMultiple <= 4) return "3-4 IRSC";
  return "4+ IRSC";
}

/**
 * Calculate the personal quota for a service
 */
export function calculatePersonalQuota(basicPrice: number, percentage: number): number {
  return basicPrice * percentage;
}

/**
 * Calculate all service quotas at once
 */
export function calculateAllQuotas(
  income: number,
  familyMembers: number
): Record<string, { basic: number; personal: number }> {
  const equivalentIncome = calculateEquivalentIncome(income, familyMembers);
  const percentage = getTierPercentage(equivalentIncome);

  const results: Record<string, { basic: number; personal: number }> = {};

  for (const [key, service] of Object.entries(SERVICES)) {
    results[key] = {
      basic: service.basic,
      personal: calculatePersonalQuota(service.basic, percentage),
    };
  }

  return results;
}

/**
 * Format a number as currency (EUR)
 */
export function formatCurrency(value: number): string {
  return value.toFixed(2).replace('.', ',') + ' €';
}

/**
 * Format a percentage for display
 */
export function formatPercentage(value: number): string {
  return (value * 100).toFixed(0) + '%';
}
