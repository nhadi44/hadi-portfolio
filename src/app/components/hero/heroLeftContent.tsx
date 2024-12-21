import Link from 'next/link';

export const HeroLeftContent = () => {
  return (
    <div className="lg:col-span-6 flex flex-col justify-center px-0 lg:px-20">
      <h1 className="text-2xl lg:text-4xl mb-1 lg:mb-4 font-semibold">Hello!</h1>
      <h1 className="text-3xl lg:text-5xl text-blue-500 font-semibold">
        I&apos;m Hadi Nurhidayat
      </h1>
      <p
        className="dark:text-gray-300 font-light text-[15px] lg:text-xl text-gray-800 my-2 lg:my-5 text-justify">
        <span className="font-semibold">
          Website Developer & Tech Enthusiast
        </span>
        . I&rsquo;m specialized in building websites and web applications with
        modern technologies with a focus on a great user experience and
        performance.
      </p>
      <div className="mt-5">
        <Link
          href={
            'https://drive.google.com/file/d/1gQ7lZIQy0XeT0OjDnEqLV90gjKugmY9p/preview'
          }
          target="_blank"
          className="bg-blue-500 text-sm lg:text-lg px-3 py-2 lg:px-6 lg:py-3 rounded-md hover:bg-blue-600 text-white transition diration-300 ease-in-out">
          Resume
        </Link>
      </div>
    </div>
  );
};
