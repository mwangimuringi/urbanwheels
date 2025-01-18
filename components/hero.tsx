'use client';

import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

const HERO_TITLE = "Find, book, or rent a car – quickly and easily!";
const HERO_SUBTITLE = "Streamline your car rental experience with our effortless booking process.";

const Hero = () => {
  const handleScroll = () => {
    try {
      console.log("Scroll to explore section.");
      // Add scroll behavior here
    } catch (error) {
      console.error("Error during scroll:", (error as Error).message);
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 px-0">
        <h1 className="hero__title">{HERO_TITLE}</h1>
        <p className="hero__subtitle">{HERO_SUBTITLE}</p>
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
