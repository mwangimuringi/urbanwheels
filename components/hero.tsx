'use client';

import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

const Hero = () => {
  const handleScroll = () => {
    console.log("Scroll to explore section.");
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 px-0">
        <h1 className="hero__title">
          Find, book, or rent a car – quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking process.
        </p>
        <CustomButton
          title="Explore cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 hover:bg-primary-blue-dark transition ease-in-out"
          handleClick={handleScroll}
          btnType="button"
          textStyles="font-medium"
          isDisabled={false}
          aria-label="Explore cars button"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="Hero illustration"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
