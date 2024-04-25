'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MediaObject } from '@/types';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';
import Button from '../button';

type CarouselProps = {
  media: MediaObject[];
  isAutoSlide: boolean;
};

const Carousel: React.FC<CarouselProps> = ({ media, isAutoSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + media.length) % media.length
    );
  };

  useEffect(() => {
    if (isAutoSlide) {
      timeoutRef.current = setTimeout(handleNext, 3000); // Move to the next media every 3 seconds
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [currentIndex, isAutoSlide]);

  const renderMedia = (item: MediaObject) => {
    switch (item.type) {
      case 'video':
        return (
          <video
            key={item.id}
            controls
            poster={item.poster}
            className='w-full h-full object-cover'
          >
            <source src={item.url} type='video/mp4' />
          </video>
        );
      case 'image':
        return (
          <Image
            key={item.id}
            src={item.url}
            alt={item.name}
            width={150}
            height={150}
            className='object-contain'
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className='relative w-full'>
      <div className='flex items-center justify-center overflow-hidden'>
        {media.map((item) => renderMedia(item))}
      </div>
      <Button
        onClick={handlePrevious}
        className='absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-badge'
        variant='none'
      >
        <IoIosArrowBack size={24} />
      </Button>
      <Button
        onClick={handleNext}
        className='absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full'
        variant='none'
      >
        <IoIosArrowForward size={24} />
      </Button>
    </div>
  );
};

export default Carousel;
