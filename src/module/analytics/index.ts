import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export * from "./types";
export { AnalyticsCard } from "./analytics-card";
export type { AnalyticsCardProps } from "./analytics-card";
export { UserRegistration } from "./user-registration";
