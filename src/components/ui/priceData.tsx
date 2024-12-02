import { Price } from "@/types";

export const priceData: Record<string, Price[]> = {
  Wimpernbehandlungen: [
    {
      title: "WIMPERNLIFTING DELUXE INKL. FÄRBEN + KERATIN + EYE CARE",
      description: "1:00 h.",
      price: "45,00 EUR",
    },
    {
      title: "WIMPERN- + BROWLIFTING INKL. FÄRBEN",
      description: "1:15 h.",
      price: "85,00 EUR",
    },
    {
      title: "Wimpernlifting ANACENI",
      description: "1:00 h.",
      price: "55,00 EUR",
    },
  ],
  Augenbraunbehandlungen: [
    {
      title: "BROWLIFTING INKL. EXPERT SHAPE + FÄRBEN + BROW KERATİN",
      description: "1:00 h.",
      price: "45,00 EUR",
    },
    {
      title: "Augenbrauen zupfen mit Fadentechnik & Styling",
      description: "30 min.",
      price: "12,00 EUR",
    },
    {
      title: "Augenbrauen zupfen nach goldenen Schnittpunkt",
      description: "45 min.",
      price: "17,00 EUR",
    },
  ],
  PermanentMakeUp: [
    {
      title: "Lidstrich oben",
      description: "Fein pigmentierte Linie am oberen Wimpernkranz.",
      price: "390,00 EUR",
    },
    // Add more services for this category...
  ],
  Harrentfernung: [
    {
      title: "Orientalische Fadentechnik",
      description: "45 min.",
      price: "20,00 EUR",
    },
  ],
};
