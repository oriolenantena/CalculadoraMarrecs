# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Calculadora Marrecs is a fee calculator for municipal nursery schools (EBM Marrecs and EBM Mainada) in Sant Just Desvern. It calculates personalized fees based on family income and household size using social tarification, with additional service options and tiered pricing.

## Technology Stack

- **Framework**: Next.js 16 with React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Build Output**: Static HTML export (no server required)

## Build Commands

```bash
# Install dependencies
npm install

# Development server at http://localhost:3000
npm run dev

# Production build (static export to /out directory)
npm run build

# Lint
npm run lint
```

## Architecture

### Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page with intro text and Calculator
│   └── globals.css      # Tailwind imports and theme variables
├── components/
│   ├── Calculator.tsx   # Main calculator with state management
│   ├── InputSection.tsx # Income and family size inputs
│   ├── ResultsTable.tsx # Service quotas display
│   └── ui/              # shadcn/ui components (button, card, input, etc.)
└── lib/
    ├── calculator.ts    # Core calculation functions
    ├── prices.ts        # 2025 pricing configuration and IRSC base
    └── utils.ts         # Utility functions
```

### Core Logic

**Fee Calculation** (`src/lib/calculator.ts`):
- `calculateEquivalentIncome()`: Adjusts income by `income / (sqrt(familyMembers) / sqrt(2))`
- `getIRSCMultiple()`: Converts equivalent income to IRSC multiples
- `getTierPercentage()`: Returns fixed percentage based on tier (10%, 25%, 55%, 95%, 100%)
- `calculateAllQuotas()`: Computes all service quotas for display

**Pricing Configuration** (`src/lib/prices.ts`):
- IRSC base value (2025: 9,341.92 EUR)
- Five income tiers with fixed percentages
- 40+ service definitions organized by category (schooling, meals, daycare, etc.)

### Components

- **Calculator.tsx**: Client component managing `income` and `familyMembers` state with `useMemo` for efficient recalculation
- **InputSection.tsx**: Two-column form with income (EUR) and family members inputs, includes help tooltips
- **ResultsTable.tsx**: Displays summary card (equivalent income, tier, percentage) and categorized service tables

## Yearly Updates

When updating for a new school year:

1. **src/lib/prices.ts**: Update `IRSC_BASE` value and all service prices in `SERVICES` array
2. **src/app/page.tsx**: Update footer text with new school year (e.g., "Curs 2026-2027")

## Deployment

Static export to `/out` directory. Deploy contents to any static hosting (OVH shared hosting with WordPress multisite).

## Key Differences from Old Angular Version

| Aspect | Old | New |
|--------|-----|-----|
| Framework | Angular 9.1.6 | Next.js 16 / React 19 |
| Styling | Bootstrap 4 | Tailwind CSS 4 |
| Calculation | Interpolation between tiers | Fixed tier percentages |
| Testing | Karma/Protractor | None configured |
