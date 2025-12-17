# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Calculadora Marrecs is a fee calculator for municipal nursery schools (EBM Marrecs and EBM Mainada) in Sant Just Desvern. It calculates personalized fees based on family income and household size using social tarification, with additional discounts for siblings, disability, or foster care situations.

## Build Commands

**Note:** This project requires Angular CLI 9.1.6 due to legacy dependencies. On modern systems, use Docker:

```bash
# Build environment setup (Ubuntu 22.04 container)
docker run -ti --rm -v ~/Docker_Share:/data ubuntu:22.04 /bin/bash
apt update && apt install npm
cd /data/CalculadoraMarrecs/old
npm install
npm install -g @angular/cli@9.1.6

# Development
ng serve                    # Dev server at http://localhost:4200/

# Build
ng build --prod             # Production build to dist/calculadora-marrecs/

# Testing
ng test                     # Unit tests via Karma
ng e2e                      # E2E tests via Protractor

# Lint
ng lint
```

## Architecture

Single-component Angular application. All business logic lives in `old/src/app/app.component.ts`:

- **Fee calculation constants** (lines 4-57): Base prices (`B*` vars) and minimum prices (`C*` vars) for schooling, meals, daycare
- **Income brackets** (lines 86-109): IRSC-based income tiers with percentage multipliers (`K*`, `L*`, `M*` vars for ranges and percentages)
- **Family equivalence calculation**: Income adjusted by `sqrt(members)/sqrt(2)` coefficient
- **Quota calculation**: `personal_quota_raw()` interpolates between tiers; `personal_quota()` applies extra discounts (max 20%)

The template (`app.component.html`) uses Bootstrap 4 with two-way binding via FormsModule for family income/size inputs and discount checkboxes.

## Deployment

Hosted on OVH shared hosting with WordPress multisite.
