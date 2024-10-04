'use client';

import { ConnectWithMe } from '@/app/components/about/connectWithMe';

export const AboutLeftContent = () => {
  return (
    <div className="col-span-6 flex flex-col justify-center gap-8">
      <div>
        <h5 className="text-blue-500 font-semibold text-2xl mb-2">About Me</h5>
        <h1 className="font-semibold text-4xl mb-3">Who am I?</h1>
        <p className="font-light text-lg text-gray-700 dark:text-gray-200 text-justify">
          I&apos;m a website developer based in Jakarta, Indonesia, with over 3
          years of hands-on experience. I specialize in building
          high-performance, user-focused websites using the latest and most
          popular web technologies. My passion lies in creating seamless digital
          experiences that not only look great but also deliver optimal
          performance, ensuring a smooth and engaging user experience.
        </p>
      </div>
      <ConnectWithMe />
    </div>
  );
};
