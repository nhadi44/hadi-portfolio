import Link from 'next/link';

export const HeroLeftContent = () => {
  return (
    <div className="col-span-6 flex flex-col justify-center px-20">
      <h1 className="text-4xl mb-4 font-semibold">Hello!</h1>
      <h1 className="text-5xl text-blue-500 font-semibold">
        I'm Hadi Nurhidayat
      </h1>
      <p className="dark:text-gray-300 font-light text-xl text-gray-800 my-5">
        <span className="font-semibold">
          Website Developer & Tech Enthusiast
        </span>
        . I'm specialized in building websites and web applications with modern
        technologies with a focus on a great user experience and performance.
      </p>
      <div className="mt-5">
        <Link
          href={
            'https://drive.google.com/file/d/1gQ7lZIQy0XeT0OjDnEqLV90gjKugmY9p/preview'
          }
          target="_blank"
          className="bg-blue-500 px-6 py-3 rounded-md hover:bg-blue-600 text-white transition diration-300 ease-in-out">
          Resume
        </Link>
      </div>
    </div>
  );
};
