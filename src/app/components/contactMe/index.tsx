'use client';

import { FormGetInTouch } from '@/app/components/contactMe/formGetInTouch';

export const ContactMe = () => {
  return (
    <div className="max-w-[50%] mx-auto lg:px-20 py-24">
      <div className="w-full">
        <h1 className="text-center text-xl font-semibold uppercase text-blue-500">
          Contact
        </h1>
        <h2 className="text-start lg:text-center text-[14px] lg:text-3xl font-semibold my-3">
          Getting in Touch With Me
        </h2>
        <p className="text-gray-500 dark:text-slate-100 mb-10 lg:mb-14 text-start lg:text-center text-sm lg:text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur,
          blanditiis commodi consequatur culpa facilis incidunt ipsum libero
          natus nihil pariatur quos sed soluta velit? Architecto id nam placeat
          quibusdam quo similique vel velit? Accusamus delectus dolores enim in
          nesciunt, nisi non, nulla quibusdam recusandae repudiandae unde vero
          vitae, voluptates voluptatum?
        </p>
        <FormGetInTouch />
      </div>
    </div>
  );
};
