import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineDeeppurple300: "border border-deep_purple_300 border-solid",
  OutlinePurple800: "border border-purple_800 border-solid",
  OutlinePurple200: "border border-purple_200 border-solid",
  OutlineIndigo50:
    "bg-purple_600 border border-gray-300 border-solid shadow-bs1",
  OutlineBluegray901:
    "bg-purple_600 border border-bluegray_901 border-solid shadow-bs1",
  OutlinePurple50:
    "bg-purple_600 border border-purple_50 border-solid shadow-bs",
  OutlinePurple50_1:
    "bg-purple_300 border border-purple_50 border-solid shadow-bs",
  srcOutlineBluegray800: "border border-bluegray_800 border-solid",
  srcOutlineDeeppurpleA100: "border border-deep_purple_A100 border-solid",
};
const shapes = {
  RoundedBorder10: "rounded-radius10",
  CircleBorder24: "rounded-radius24",
  srcCircleBorder30: "rounded-radius30",
};
const sizes = {
  sm: "3xl:p-[10px] lg:p-[6px] xl:p-[8px] p-[9px]",
  md: "xl:px-[10px] px-[12px] 3xl:px-[14px] lg:px-[8px] xl:py-[11px] py-[13px] 3xl:py-[15px] lg:py-[9px]",
  lg: "lg:p-[11px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  smSrc: "lg:p-[14px] xl:p-[18px] p-[21px] 3xl:p-[25px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder10",
    "CircleBorder24",
    "srcCircleBorder30",
  ]),
  variant: PropTypes.oneOf([
    "OutlineDeeppurple300",
    "OutlinePurple800",
    "OutlinePurple200",
    "OutlineIndigo50",
    "OutlineBluegray901",
    "OutlinePurple50",
    "OutlinePurple50_1",
    "srcOutlineBluegray800",
    "srcOutlineDeeppurpleA100",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
