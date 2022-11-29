import React from "react";
import "../styles/color.css";
import "../styles/font.css";
import "../styles/index.css";
import "../styles/tailwind.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
