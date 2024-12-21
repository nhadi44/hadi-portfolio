import React from 'react';
import { HeroLeftContent } from './heroLeftContent';
import { HeroRightContent } from './heroRightContent';

export const Hero: React.FC = () => {
  return (
    <div className="lg:grid lg:grid-cols-12 lg:h-[calc(100vh-7rem)]">
      <HeroLeftContent />
      <HeroRightContent />
    </div>
  );
};
