'use client'
import { CustomButtonProps } from '@/types'
import React from 'react'
import Image from "next/image";

const CustomButton: React.FC<CustomButtonProps> = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisabled }) => {
    return (
        <button
            disabled={false}
            type={"button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="arrow_left"
                        fill
                        className="object-contain"
                    />
                </div>
            )}
        </button>
    )
}

export default CustomButton
