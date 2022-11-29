import React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof textStyles> & {
  children: React.ReactNode;
};

const textStyles = cva("text-inherit font-inter", {
  variants: {
    intent: {
      h1: "text-4xl sm:text-[42px] font-bold text-center",
      h2: "",
      h3: "",
      p: "text-base",
    },
  },
  defaultVariants: {},
});

export function Text({ children, intent }: Props) {
  const Element = intent || "p";
  return <Element className={textStyles({ intent })}>{children}</Element>;
}

export default Text;
