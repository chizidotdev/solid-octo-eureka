import React from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { ServiceProvider } from "@store/service";
import { UserProvider } from "@store/user";
import { ThemeProvider } from "src/store/theme";

import "../styles/color.css";
import "../styles/font.css";
import "../styles/index.css";
import "../styles/tailwind.css";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider>
      <UserProvider>
        <ServiceProvider>
          <Component {...pageProps} />
        </ServiceProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
