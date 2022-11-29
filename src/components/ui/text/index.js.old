import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[34px] xl:text-[42px] text-[48px] 3xl:text-[57px]",
  h2: "font-semibold lg:text-[30px] xl:text-[38px] text-[42.98px] 2xl:text-[43px] 3xl:text-[51px]",
  h3: "font-bold lg:text-[29px] xl:text-[37px] text-[42px] 3xl:text-[50px]",
  h4: "font-bold lg:text-[22px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  h5: "lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  h6: "font-semibold lg:text-[11px] xl:text-[14px] text-[16.34px] 2xl:text-[16px] 3xl:text-[19px]",
  body1:
    "font-normal lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body2:
    "font-normal lg:text-[10px] xl:text-[12px] text-[14.53px] 2xl:text-[14px] 3xl:text-[17px]",
  body3:
    "lg:text-[10px] xl:text-[12px] text-[14.52px] 2xl:text-[14px] 3xl:text-[17px]",
  body4: "font-normal xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
