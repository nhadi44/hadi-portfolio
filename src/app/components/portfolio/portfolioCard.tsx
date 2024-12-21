'use client';

import { useEffect, useState } from 'react';

export const PortfolioCard = () => {
  const [testImage, setTestImage] = useState('');

  useEffect(() => {
    setTestImage('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
  }, [testImage]);

  return (
    <div
      className="w-full h-64 bg-cover bg-center shadow-xl shadow-slate-800/50 rounded-sm relative group cursor-pointer"
      style={{ backgroundImage: `url(${testImage})` }}>
      <div
        className="bg-blue-500/80 dark:bg-slate-800/80 absolute w-full bottom-0 px-4 py-6 transition-all duration-300 group-hover:bg-blue-500/90 dark:group-hover:bg-slate-800/90">
        <h1 className="text-white font-semibold">Judul Project</h1>
        <div
          className="overflow-hidden max-h-0 transition-all duration-300 ease-in-out group-hover:max-h-[200px] group-hover:translate-y-0">
          <p
            className="text-white font-light transform translate-y-full group-hover:translate-y-0 transition-all duration-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam
            at perspiciatis inventore eius quia sapiente nihil veniam fuga
            voluptate impedit?
          </p>
        </div>
      </div>
    </div>
  );
};
