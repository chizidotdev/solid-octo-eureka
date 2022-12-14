import React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof textStyles> & {
  children: React.ReactNode;
  className?: string;
};

const textStyles = cva("text-inherit font-inter", {
  variants: {
    intent: {
      h1: "sm:text-4xl text-3xl font-bold",
      h2: "sm:text-3xl text-2xl font-semibold",
      h3: "sm:text-2xl text-xl font-semibold",
      h4: "text-sm font-semibold",
      p: "text-base",
    },
  },
  defaultVariants: {},
});

export function Text({ children, intent, className }: Props) {
  const Element = intent || "p";
  return (
    <span className={className}>
      <Element className={textStyles({ intent })}>{children}</Element>
    </span>
  );
}

export default Text;
