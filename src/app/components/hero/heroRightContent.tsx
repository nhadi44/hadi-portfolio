import Image from 'next/image';

export const HeroRightContent = () => {
  return (
    <div className="col-span-6 flex flex-col justify-center items-center">
      <Image
        src={'/assets/images/svg/hero_image.svg'}
        width={700}
        height={700}
        alt="Hero Image"
        unoptimized
      />
    </div>
  );
};
