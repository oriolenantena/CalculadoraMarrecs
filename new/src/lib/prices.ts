// Configuration loaded from JSON for easy yearly updates
import configData from './config.json';

export const IRSC_BASE = configData.irsc.value;

export const TIERS = configData.tiers.brackets.map(tier => ({
  max: tier.maxIRSCMultiple === null ? Infinity : tier.maxIRSCMultiple,
  percentage: tier.percentage / 100,
}));

export interface Service {
  name: string;
  basic: number;
  category: string;
}

// Convert array to Record for backward compatibility
export const SERVICES: Record<string, Service> = Object.fromEntries(
  configData.services.map(service => [
    service.id,
    {
      name: service.name,
      basic: service.basicPrice,
      category: service.category,
    }
  ])
);

// Group services by category for display
export const SERVICE_CATEGORIES = [
  {
    id: "escolaritzacio",
    name: "Escolarització",
    services: configData.services
      .filter(s => s.category === "escolaritzacio")
      .map(s => s.id)
  },
  {
    id: "menjador",
    name: "Servei de menjador",
    services: configData.services
      .filter(s => s.category === "menjador")
      .map(s => s.id)
  },
  {
    id: "menjadorParcial",
    name: "Servei de menjador fix parcial",
    subsections: [
      {
        name: "3 vegades/setmana",
        services: configData.services
          .filter(s => s.category === "menjadorParcial3x")
          .map(s => s.id)
      },
      {
        name: "2 vegades/setmana",
        services: configData.services
          .filter(s => s.category === "menjadorParcial2x")
          .map(s => s.id)
      },
      {
        name: "1 vegada/setmana",
        services: configData.services
          .filter(s => s.category === "menjadorParcial1x")
          .map(s => s.id)
      },
    ]
  },
  {
    id: "esporadics",
    name: "Serveis esporàdics",
    services: configData.services
      .filter(s => s.category === "esporadics")
      .map(s => s.id)
  },
  {
    id: "acollida",
    name: "Servei d'acollida (8:00-8:30 i 17:00-17:30)",
    services: configData.services
      .filter(s => s.category === "acollida")
      .map(s => s.id)
  },
];
