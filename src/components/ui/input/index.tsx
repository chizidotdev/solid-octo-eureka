import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import React from "react";

type Props = React.ComponentPropsWithoutRef<"input"> &
  VariantProps<typeof inputStyles>;

const inputStyles = cva(
  "h-10 w-full bg-inherit font-medium placeholder:opacity-50 border placeholder:text-sm",
  {
    variants: {
      color: {
        primary: ["border-black_night", "rounded-full"],
        brand: [
          "rounded-lg",
          "border-brand_200",
          "text-brand-primary_day dark:text-brand-primary_night",
          "placeholder:text-brand-primary_day dark:placeholder:text-brand-primary_night",
        ],
      },
      intent: {
        form: "px-5",
        header: "px-10",
      },
    },

    defaultVariants: {
      color: "primary",
      intent: "form",
    },
  }
);

export default function Input({ color, intent, ...props }: Props) {
  return <input className={inputStyles({ color, intent })} {...props} />;
}
