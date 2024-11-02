'use client';

import Image from 'next/image';
import { FormGetInTouch } from '@/app/components/contactMe/formGetInTouch';
import { MapPin } from '@/app/components/icons/mapPin';
import { Envelope } from '@/app/components/icons/envelope';
import { Tooltip } from 'flowbite-react';
import Link from 'next/link';
import { FacebookIcon } from '@/app/components/icons/social-media/facebook';
import { InstagramIcon } from '@/app/components/icons/social-media/instagram';
import { LinkedinIcon } from '@/app/components/icons/social-media/linkedin';

export const ContactMe = () => {


  return (
    <div className="max-w-[90%] mx-auto px-20 py-24 grid grid-cols-2 gap-4">
      <div className="w-full">
        <FormGetInTouch />
      </div>
      <div className="">
        <div className="flex justify-center mb-14">
          <Image src={'/assets/images/svg/undraw_popular_re_mlfe.svg'} alt={'get-in-touch'} width={500} height={500}
                 className="w-[60%]" />
        </div>
        <div className="flex justify-center mb-10">
          <div className="">
            <div className="flex items-center gap-3 mb-3">
              <MapPin property={{ className: 'size-8 text-gray-500' }} />
              <span className="text-gray-500 font-semibold">Jakarta, Indonesia</span>
            </div>
            <div className="flex items-center gap-3">
              <Envelope property={{ className: 'size-8 text-gray-500' }} />
              <span className="text-gray-500 font-semibold">hadinurhidayat97@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-10">
          <Tooltip content={'Facebook'} placement={'bottom'}>
            <Link href={'#'}>
              <FacebookIcon property={{ height: '3em', width: '3em' }} />
            </Link>
          </Tooltip>
          <Tooltip content={'Linkedin'} placement={'bottom'}>
            <Link href={'#'}>
              <LinkedinIcon property={{ height: '3em', width: '3em' }} />
            </Link>
          </Tooltip>
          <Tooltip content={'Instagram'} placement={'bottom'}>
            <Link href={'#'}>
              <InstagramIcon property={{ height: '3em', width: '3em' }} />
            </Link>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
