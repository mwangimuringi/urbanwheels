"use client";
import { CustomButtonProps } from "@/types";
import React from "react";
import Image from "next/image";

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
  isDisabled,
}) => {
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!isDisabled && handleClick) {
      handleClick(event);
    }
  };

  return (
    <button
      disabled={isDisabled}
      type={btnType || "button"}
      aria-disabled={isDisabled}
      className={`custom-btn ${containerStyles} ${
        isDisabled ? "cursor-not-allowed opacity-50" : ""
      }`} // Disabled button styles
      onClick={handleButtonClick} // Updated to handle click conditionally
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
