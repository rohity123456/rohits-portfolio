'use client';
import React, { useState } from 'react';
import Button from '../button';

interface TruncatedTextProps {
  children: string;
  className?: string;
  wordCount: number;
}

const TruncatedText: React.FC<TruncatedTextProps> = ({
  children,
  className = '',
  wordCount
}) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  const isLongText = children.split(' ').length > wordCount;

  const truncateText = (text: string, wordCount: number) => {
    if (!isLongText) return text;
    return text.split(' ').slice(0, wordCount).join(' ') + '...';
  };

  return (
    <div className={`${className}`}>
      <p>{isTruncated ? truncateText(children, wordCount) : children}</p>
      {isLongText && (
        <p onClick={toggleTruncated} className='underline cursor-pointer'>
          {isTruncated ? 'Read More' : 'Read Less'}
        </p>
      )}
    </div>
  );
};

export default TruncatedText;
