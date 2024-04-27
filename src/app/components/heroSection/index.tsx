'use client';
import { RESUME_LINK } from '@/constants';
import { useTheme } from '@/contexts/theme';
import Image from 'next/image';

// src/components/HeroSection.tsx
const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section
      style={{
        backgroundImage: `${
          theme == 'light'
            ? "url('./images/bg.webp')"
            : "url('./images/bg_dark.webp')"
        }`
      }}
      className='hero bg-white dark:bg-gray-900 w-screen min-h-screen'
    >
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='flex flex-col md:flex-row items-center justify-center w-full h-full'>
        <div className='w-full max-w-lg mx-auto text-center md:ml-8 md:text-left md:w-1/2'>
          <h1 className='text-3xl font-semibold text-gray-100 dark:text-white'>
            {`Hello, I'm Rohit`}
          </h1>
          <p className='mt-2 text-gray-50 dark:text-gray-200'>
            A passionate{' '}
            <span className='text-red-950 dark:text-red-300 font-bold text-lg mt-1'>
              {'<Fullstack Engineer/>'}
            </span>{' '}
            who loves crafting polished web experiences. Specializing in React
            and Next.js, I focus on writing clean, elegant and efficient code.
          </p>
          <div className='flex justify-center md:justify-start mt-4'>
            <a
              href={RESUME_LINK}
              target='_blank'
              className='p-2 px-4 font-semibold border rounded text-primary border-primary hover:bg-primary hover:text-secondary hover:border-secondary'
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className='w-[400px] h-[400px] relative'>
          <Image
            className='p-2 py-4 mx-auto object-cover rounded-[30px]'
            layout='fill'
            src='/images/rohit.jpeg'
            alt='Profile'
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
