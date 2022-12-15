import type { TSummary, TRegistration, TCountries } from "./types";

export const userRegistration: TRegistration = {
  newsletter: [68, 78, 32, 164, 117, 142, 98],
  subscription: [136, 104, 128, 35, 59, 109, 185],
};

export const summary: TSummary = {
  registration: 4324.32,
  traffic: 4932.53,
  topCountry: "Nigeria",
  topRhendor: "designsynchrony",
  topService: "Hair Stylist",
};

export const topCountries: TCountries[] = [
  { amount: 6455, country: "Nigeria" },
  { amount: 4434, country: "Ghana" },
  { amount: 2555, country: "Togo" },
  { amount: 974, country: "Canada" },
  { amount: 221, country: "Australia" },
];

export const bottomCountries: TCountries[] = [
  { amount: 2, country: "Nigeria" },
  { amount: 2, country: "Ghana" },
  { amount: 5, country: "Togo" },
  { amount: 6, country: "Canada" },
  { amount: 9, country: "Australia" },
];
