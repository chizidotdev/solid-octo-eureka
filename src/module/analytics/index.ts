import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

export { AnalyticsCard } from "./analytics-card";
export type { AnalyticsCardProps } from "./analytics-card";
export * from "./types";

export { UniqueVisitors } from "./unique-visitors";
export { UserRegistration } from "./user-registration";
export { UsersByGender } from "./users-by-gender";
export { SessionsPerDay } from "./sessions-per-day";
export { Navigation } from "./navigation";
export { UserByDevice } from "./user-by-device";
