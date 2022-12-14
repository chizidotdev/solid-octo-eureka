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

export { AnalyticsCard } from "./components/analytics-card";
export type { AnalyticsCardProps } from "./components/analytics-card";
export * from "./types";

export { UniqueVisitors } from "./components/unique-visitors";
export { UserRegistration } from "./components/user-registration";
export { Summary } from "./components/summary";
export { UsersByGender } from "./components/users-by-gender";
export { SessionsPerDay } from "./components/sessions-per-day";
export { Navigation } from "./components/navigation";
export { UserByDevice } from "./components/user-by-device";
