import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder7: "rounded-radius726",
  RoundedBorder15: "rounded-radius15",
  CircleBorder19: "rounded-radius19",
  icbCircleBorder32: "rounded-radius32",
  icbCircleBorder40: "rounded-radius40",
};
const variants = {
  FillBlueA700: "bg-blue_A700 text-gray_901",
  FillPurple600: "bg-purple_600",
  FillPurple300: "bg-purple_300",
  OutlineIndigo50:
    "bg-white_A700 border border-gray-300 border-solid text-bluegray_900",
  OutlineBluegray900:
    "bg-gray_900 border border-bluegray_900 border-solid text-bluegray_500",
  icbFillGray50: "bg-gray_50",
  icbFillIndigo50: "bg-gray-300",
  icbFillBluegray900: "bg-bluegray_900",
};
const sizes = {
  sm: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[8px]",
  md: "lg:p-[10px] xl:p-[13px] p-[15px] 3xl:p-[18px]",
  smIcn: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[8px]",
  mdIcn: "lg:p-[17px] xl:p-[22px] p-[25px] 3xl:p-[30px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder7",
    "RoundedBorder15",
    "CircleBorder19",
    "icbCircleBorder32",
    "icbCircleBorder40",
  ]),
  variant: PropTypes.oneOf([
    "FillBlueA700",
    "FillPurple600",
    "FillPurple300",
    "OutlineIndigo50",
    "OutlineBluegray900",
    "icbFillGray50",
    "icbFillIndigo50",
    "icbFillBluegray900",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn", "mdIcn"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder7",
  variant: "FillPurple600",
  size: "sm",
};

export { Button };
