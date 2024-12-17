import Image from 'next/image';
import React from 'react';
import StarImage from '@/assets/star.svg';

export default function Stars({ count, size }) {
  return (
    <div className="flex gap-1 justify-center items-center">
      {Array.from({ length: count }, (_, idx) => (
        <Image
          key={idx}
          src={StarImage}
          width={size}
          height={size}
          alt={`Star ${idx + 1}`} // Add alt text for accessibility
        />
      ))}
    </div>
  );
}
