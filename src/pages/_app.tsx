import React from "react";
import { ServiceProvider } from "@store/service";
import { UserProvider } from "@store/user";
import { ThemeProvider } from "src/store/theme";
import "../styles/color.css";
import "../styles/font.css";
import "../styles/index.css";
import "../styles/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <ServiceProvider>
          <Component {...pageProps} />
        </ServiceProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
