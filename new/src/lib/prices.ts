// 2025 Prices Configuration
// Update this file yearly when prices change

export const IRSC_BASE = 9341.92; // IRSC base value for 2025

export const TIERS = [
  { max: 1, percentage: 0.10 },   // 0-1 IRSC: 10%
  { max: 2, percentage: 0.25 },   // 1-2 IRSC: 25%
  { max: 3, percentage: 0.55 },   // 2-3 IRSC: 55%
  { max: 4, percentage: 0.95 },   // 3-4 IRSC: 95%
  { max: Infinity, percentage: 1.00 }, // 4+ IRSC: 100%
];

export interface Service {
  name: string;
  basic: number;
  category: string;
}

export const SERVICES: Record<string, Service> = {
  // Escolarització
  escolaritzacio: {
    name: "Escolarització",
    basic: 226.20,
    category: "escolaritzacio"
  },
  baixesAbsencies: {
    name: "Baixes o absències per confinament",
    basic: 7.35,
    category: "escolaritzacio"
  },

  // Servei de menjador
  menjadorComplet: {
    name: "Menjador complert",
    basic: 167.90,
    category: "menjador"
  },
  menjadorLactants: {
    name: "Menjador lactants",
    basic: 83.95,
    category: "menjador"
  },
  berenar: {
    name: "Berenar",
    basic: 0.70,
    category: "menjador"
  },
  descompteMenjAbsencies: {
    name: "Descompte menj. (absències o confinament)",
    basic: 3.10,
    category: "menjador"
  },
  descompteMenjLactants: {
    name: "Descompte menj. lactants (absències o confinament)",
    basic: 1.55,
    category: "menjador"
  },
  descompteNadalSS: {
    name: "Descompte laborable Nadal i Setmana Santa",
    basic: 7.20,
    category: "menjador"
  },
  descompteNadalSSLactants: {
    name: "Descompte laborable Nadal i Setmana Santa lactants",
    basic: 3.60,
    category: "menjador"
  },
  nousAlumnesSetembre: {
    name: "Import nous alumnes menjador setembre",
    basic: 7.00,
    category: "menjador"
  },
  nousAlumnesSetembreLactants: {
    name: "Import nous alumnes menjador setembre lactants",
    basic: 3.50,
    category: "menjador"
  },

  // Servei de menjador fix parcial - 3 vegades/setmana
  menjadorFix3xComplet: {
    name: "Menjador 3 vegades/setmana complert",
    basic: 160.70,
    category: "menjadorParcial3x"
  },
  menjadorFix3xLactants: {
    name: "Menjador 3 vegades/setmana lactants",
    basic: 80.35,
    category: "menjadorParcial3x"
  },

  // Servei de menjador fix parcial - 2 vegades/setmana
  menjadorFix2xComplet: {
    name: "Menjador 2 vegades/setmana complert",
    basic: 107.20,
    category: "menjadorParcial2x"
  },
  menjadorFix2xLactants: {
    name: "Menjador 2 vegades/setmana lactants",
    basic: 53.60,
    category: "menjadorParcial2x"
  },

  // Servei de menjador fix parcial - 1 vegada/setmana
  menjadorFix1xComplet: {
    name: "Menjador 1 vegada/setmana complert",
    basic: 53.60,
    category: "menjadorParcial1x"
  },
  menjadorFix1xLactants: {
    name: "Menjador 1 vegada/setmana lactants",
    basic: 26.80,
    category: "menjadorParcial1x"
  },

  // Serveis esporàdics
  esporadicMenjadorComplet: {
    name: "Esporàdic menjador complert",
    basic: 13.60,
    category: "esporadics"
  },
  esporadicMenjadorLactants: {
    name: "Esporàdic menjador lactants",
    basic: 6.80,
    category: "esporadics"
  },

  // Servei d'acollida
  acollidaOctJuny: {
    name: "Servei acollida (octubre-juny)",
    basic: 30.15,
    category: "acollida"
  },
  acollidaJuliol: {
    name: "Servei acollida (juliol)",
    basic: 15.10,
    category: "acollida"
  },
  esporadic30min: {
    name: "Esporàdic 30 minuts",
    basic: 3.25,
    category: "acollida"
  },
};

// Group services by category for display
export const SERVICE_CATEGORIES = [
  {
    id: "escolaritzacio",
    name: "Escolarització",
    services: ["escolaritzacio", "baixesAbsencies"]
  },
  {
    id: "menjador",
    name: "Servei de menjador",
    services: ["menjadorComplet", "menjadorLactants", "berenar", "descompteMenjAbsencies", "descompteMenjLactants", "descompteNadalSS", "descompteNadalSSLactants", "nousAlumnesSetembre", "nousAlumnesSetembreLactants"]
  },
  {
    id: "menjadorParcial",
    name: "Servei de menjador fix parcial",
    subsections: [
      { name: "3 vegades/setmana", services: ["menjadorFix3xComplet", "menjadorFix3xLactants"] },
      { name: "2 vegades/setmana", services: ["menjadorFix2xComplet", "menjadorFix2xLactants"] },
      { name: "1 vegada/setmana", services: ["menjadorFix1xComplet", "menjadorFix1xLactants"] },
    ]
  },
  {
    id: "esporadics",
    name: "Serveis esporàdics",
    services: ["esporadicMenjadorComplet", "esporadicMenjadorLactants"]
  },
  {
    id: "acollida",
    name: "Servei d'acollida (8:00-8:30 i 17:00-17:30)",
    services: ["acollidaOctJuny", "acollidaJuliol", "esporadic30min"]
  },
];
