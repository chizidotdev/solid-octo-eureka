import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import Image from "next/image";
import React from "react";

type Props = VariantProps<typeof desLogoStyles>;

const desLogoStyles = cva("relative w-16 h-16 flex-shrink-0", {
  variants: {
    size: {
      lg: ["border-black_night", ""],
    },
  },
});

export default function DESLogo({ size }: Props) {
  return (
    <div className={desLogoStyles({ size })}>
      <Image src={`/images/img_des_logo.png`} alt="whitelogo" fill />
    </div>
  );
}
