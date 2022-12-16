import type { TSummary, TRegistration, TCountries, TMostViewed } from "./types";

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

export const mostViewedRhendors: TMostViewed[] = [
  {
    title: "Design Synchrony",
    value: 637,
    status: { rank: "up", value: 1 },
    imageUrl: "/images/img_des_logo.png",
  },
  {
    title: "Leo Vaccaro",
    value: 637,
    status: { rank: "down", value: 2 },
    imageUrl: "/images/img_user1.png",
  },
  {
    title: "Lynn Tanner",
    value: 637,
    status: { rank: "up", value: 3 },
    imageUrl: "/images/img_user2.png",
  },
  {
    title: "Sledge Hammer",
    value: 637,
    status: { rank: "up", value: 4 },
    imageUrl: "/images/img_user3.png",
  },
  {
    title: "Col. Roderick Decker",
    value: 637,
    status: { rank: "down", value: 5 },
    imageUrl: "/images/img_user4.png",
  },
];

export const mostViewedServices: TMostViewed[] = [
  {
    title: "Plumber",
    value: 637,
    status: { rank: "up", value: 1 },
  },
  {
    title: "Barber",
    value: 637,
    status: { rank: "down", value: 2 },
  },
  {
    title: "Electrician",
    value: 637,
    status: { rank: "up", value: 3 },
  },
  {
    title: "Tailor",
    value: 637,
    status: { rank: "up", value: 4 },
  },
  {
    title: "Hari Stylist",
    value: 637,
    status: { rank: "down", value: 5 },
  },
];
