'use client';

export const AboutLeftContent = () => {
  return (
    <div className="lg:col-span-6 flex flex-col justify-center gap-4 lg:gap-8">
      <div>
        <h5 className="text-blue-500 font-semibold text-lg lg:text-2xl mb-1 lg:mb-2">
          About Me
        </h5>
        <h1 className="font-semibold text-xl lg:text-4xl mb-2 lg:mb-3">
          Who am I?
        </h1>
        <p className="font-light text-[14px] lg:text-lg text-gray-700 dark:text-gray-200 text-justify">
          I&apos;m a website developer based in Jakarta, Indonesia, with over 3
          years of hands-on experience. I specialize in building
          high-performance, user-focused websites using the latest and most
          popular web technologies. My passion lies in creating seamless digital
          experiences that not only look great but also deliver optimal
          performance, ensuring a smooth and engaging user experience.
        </p>
      </div>
    </div>
  );
};
