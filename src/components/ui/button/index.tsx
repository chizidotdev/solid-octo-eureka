import React from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

type Props = VariantProps<typeof buttonStyles> & {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

const buttonStyles = cva("w-full px-5 py-3 rounded-lg font-bold", {
  variants: {
    intent: {
      primary: "bg-brand-primary_day dark:bg-brand-secondary_night text-white",
      secondary: "bg-liver border border-liver hover:bg-gray-100 text-white",
      link: "text-liver underline px-0 underline-offset-2",
    },
    size: {
      small: ["text-sm", "py-1", "px-7"],
      large: ["text-base", "py-2", "px-14"],
    },
  },
  defaultVariants: {
    intent: "primary",
  },
});

export default function Button({ children, intent, size, ...props }: Props) {
  return (
    <button className={buttonStyles({ intent, size })} {...props}>
      {children}
    </button>
  );
}
