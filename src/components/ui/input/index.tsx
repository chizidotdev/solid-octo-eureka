import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import React from "react";

type InputValueState = {
  value: string | number | readonly string[];
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

type InputProps = VariantProps<typeof inputStyles> & {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  autoComplete?: "on" | "off";
} & (InputValueState | Partial<InputValueState>);

const inputStyles = cva(
  "w-full bg-inherit font-medium placeholder:opacity-50 border placeholder:text-sm",
  {
    variants: {
      color: {
        primary: [
          "border-black_night",
          "dark:text-gray_day text-gray_night",
          "placeholder:text-gray_night dark:placeholder:text-gray_day",
        ],
        brand: [
          "border-brand_200",
          "text-brand-primary_day dark:text-brand-primary_night",
          "placeholder:text-brand-primary_day dark:placeholder:text-brand-primary_night",
        ],
      },
      intent: {
        form: "px-5 py-2 rounded-lg",
        header: "px-11 py-3 rounded-full",
      },
    },

    defaultVariants: {
      color: "primary",
      intent: "form",
    },
  }
);

export default function Input({ color, intent, ...props }: InputProps) {
  return <input className={inputStyles({ color, intent })} {...props} />;
}
