import React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof textStyles> & {
  children: React.ReactNode;
};

const textStyles = cva("text-brand-primary_day dark:text-brand-primary_night", {
  variants: {
    intent: {
      h1: "text-[42px] font-bold",
      h2: "",
      h3: "",
      p: "text-base",
    },
  },
  defaultVariants: {},
});

export function Text({ children, intent }: Props) {
  return <div className={textStyles({ intent })}>{children}</div>;
}

export default Text;
