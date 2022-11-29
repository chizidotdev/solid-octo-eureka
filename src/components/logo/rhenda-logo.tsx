import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import Image from "next/image";
import React from "react";

type Props = VariantProps<typeof rhendaLogoStyles> & {
  color?: "dark" | "light";
};

const rhendaLogoStyles = cva("relative w-32 h-5 flex-shrink-0", {
  variants: {
    size: {
      lg: ["border-black_night", ""],
    },
  },
});

export default function RhendaLogo({ size, color = "dark" }: Props) {
  const imageTheme =
    color === "light" ? "img_whitelogo.svg" : "img_starrhendalog.svg";

  return (
    <div className={rhendaLogoStyles({ size })}>
      <Image src={`/images/${imageTheme}`} alt="whitelogo" fill />
    </div>
  );
}
