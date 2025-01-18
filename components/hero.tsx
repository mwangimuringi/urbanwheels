'use client';

import React from 'react';
import CustomButton from './CustomButton';
import Image from 'next/image';

const TITLE = "Find, book, or rent a car – quickly and easily!";
const SUBTITLE = "Streamline your car rental experience with our effortless booking process.";

const Hero = () => {
  const handleScroll = () => {
    try {
      console.log("Scroll to explore section.");
    } catch (error) {
      console.error("Scroll error:", (error as Error).message);
    }
  };

  return (
    <div className="hero flex flex-col md:flex-row items-center justify-between px-5 py-10">
      <div className="flex-1 text-center md:text-left pt-10 md:pt-36 px-5">
        <h1 className="hero__title text-4xl md:text-6xl font-bold">{TITLE}</h1>
        <p className="hero__subtitle text-lg md:text-xl mt-5">{SUBTITLE}</p>
        <CustomButton
          title="Explore cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 px-6 py-3 hover:bg-primary-blue-dark transition ease-in-out"
          handleClick={handleScroll}
          btnType="button"
          textStyles="font-medium"
          isDisabled={false}
          aria-label="Explore cars button"
        />
      </div>
      <div className="hero__image-container flex justify-center mt-10 md:mt-0">
        <div className="hero__image relative w-full max-w-md md:max-w-lg">
          <Image
            src="/hero.png"
            alt="Hero illustration"
            fill
            className="object-contain"
          />
        </div>
        <div className="hero__image-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30" />
      </div>
    </div>
  );
};

export default Hero;
