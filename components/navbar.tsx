import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
      <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
        <Link href="/" className='flex justify-center items-center'>
          <Image
            src={'/logo.svg'}
            alt={'Kenya Wheels'}
            width={118}
            height={18}
            className='object-contain'
          />
        </Link>
        <Link href="/signup">
          <CustomButton
            title="Sign up"
            btnType="button"
            containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
            textStyles={''}
            isDisabled={false}
          />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
