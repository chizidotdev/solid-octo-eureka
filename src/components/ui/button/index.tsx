import React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof buttonStyles> & {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

const buttonStyles = cva(
  "w-full px-5 py-3 font-semibold hover:bg-opacity-80 transition-all",
  {
    variants: {
      intent: {
        primary: "bg-brand-primary_day dark:bg-brand-secondary_day text-white",
        secondary: [
          "bg-gray_day dark:bg-white-secondary_night",
          "border border-liver",
          "text-black_day dark:text-white_day",
        ],
        link: "text-liver underline px-0 underline-offset-2",
      },
      size: {
        small: ["text-sm", "py-2", "w-max"],
        large: ["text-base", "py-3"],
      },
      variant: {
        rounded: "rounded-full",
        normal: "rounded-lg",
      },
    },
    defaultVariants: {
      intent: "primary",
      variant: "normal",
    },
  }
);

export default function Button({
  children,
  intent,
  size,
  variant,
  ...props
}: Props) {
  return (
    <button className={buttonStyles({ intent, size, variant })} {...props}>
      {children}
    </button>
  );
}
