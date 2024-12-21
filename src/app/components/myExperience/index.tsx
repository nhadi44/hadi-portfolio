'use client';
import { TimelineComponent } from '../partials/timeline';

export const MyExperience = () => {
  console.log('hello');

  return (
    <div className="max-w-[70%] mx-auto lg:px-10 py-24">
      <h1 className="text-center mb-14 font-semibold text-xl uppercase text-blue-500">
        My Experiences
      </h1>
      <div>
        <TimelineComponent />
      </div>
    </div>
  );
};
