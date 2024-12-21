import { AboutLeftContent } from '@/app/components/about/aboutLeftContent';
import { AboutRightContent } from '@/app/components/about/aboutRightContent';
import React from 'react';
import { FrameworksAndTools } from './frameworkAndTools';

export const About: React.FC = () => {
  return (
    <div className=" max-w-[90%] mx-auto px-10 py-24">
      <div className="lg:grid lg:grid-cols-12 lg:gap-5 h-full mb-12 lg:mb-24">
        <AboutLeftContent />
        <AboutRightContent />
      </div>
      <FrameworksAndTools />
    </div>
  );
};
