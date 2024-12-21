'use client';

import { Progress } from '../partials/progress';

export const AboutRightContent = () => {
  return (
    <div className="lg:col-span-6 lg:flex lg:flex-col lg:justify-center lg:px-8 mt-10 lg:mt-0">
      <Progress
        props={{
          title: 'HTML & CSS',
          percentage: '90%',
          barWidth: '90%',
          wrapperStyle: 'w-full bg-gray-300 rounded-full dark:bg-gray-700 mb-5',
          barStyle:
            'bg-orange-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full',
        }}
      />
      <Progress
        props={{
          title: 'Javascript',
          percentage: '85%',
          barWidth: '85%',
          wrapperStyle: 'w-full bg-gray-300 rounded-full dark:bg-gray-700 mb-5',
          barStyle:
            'bg-yellow-300 text-xs font-medium text-slate-900 text-center p-0.5 leading-none rounded-full',
        }}
      />
      <Progress
        props={{
          title: 'PHP',
          percentage: '85%',
          barWidth: '85%',
          wrapperStyle: 'w-full bg-gray-300 rounded-full dark:bg-gray-700 mb-5',
          barStyle:
            'bg-[#4F5B93] text-xs font-medium text-white text-center p-0.5 leading-none rounded-full',
        }}
      />
      <Progress
        props={{
          title: 'Typescript',
          percentage: '80%',
          barWidth: '80%',
          wrapperStyle: 'w-full bg-gray-300 rounded-full dark:bg-gray-700 mb-5',
          barStyle:
            'bg-blue-500 text-xs font-medium text-white text-center p-0.5 leading-none rounded-full',
        }}
      />
    </div>
  );
};
