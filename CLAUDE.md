# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

**IMPORTANT: The active project is in `./new/`. The `./old/` directory contains a legacy Angular version that should not be modified.**

## Project Overview

Calculadora Marrecs is a fee calculator for municipal nursery schools (EBM Marrecs and EBM Mainada) in Sant Just Desvern. It calculates personalized fees based on family income and household size using social tarification, with additional service options and tiered pricing.

## Technology Stack

- **Framework**: Next.js 16 with React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with shadcn/ui components
- **Build Output**: Static HTML export (no server required)

## Build Commands

```bash
cd new

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

See `new/CLAUDE.md` for detailed architecture documentation.

## Deployment

Static export to `/out` directory. Deploy contents to any static hosting (OVH shared hosting with WordPress multisite).
