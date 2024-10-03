import React from 'react';
import { AboutLeftContent } from '@/app/components/about/aboutLeftContent';
import { AboutRightContent } from '@/app/components/about/aboutRightContent';

export const About: React.FC = () => {
  return (
    <div className="h-[calc(100vh-8rem)] max-w-[90%] mx-auto p-10">
      <div className="grid grid-cols-12 gap-5 h-full">
        <AboutLeftContent />
        <AboutRightContent />
      </div>
    </div>
  );
};
