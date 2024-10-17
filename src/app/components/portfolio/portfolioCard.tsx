'use client';

import { useState } from 'react';

export const PortfolioCard = () => {
  const [testImage, setTestImage] = useState(
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  );

  return (
    <div
      className={`w-full h-80 bg-cover bg-center shadow-xl shadow-slate-800/50 rounded-sm`}
      style={{ backgroundImage: `url(${testImage})` }}>
      Testing
    </div>
  );
};
