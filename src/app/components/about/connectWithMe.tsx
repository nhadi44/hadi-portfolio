import { FacebookIcon } from '@/app/components/icons/social-media/facebook';
import { GithubIcon } from '@/app/components/icons/social-media/github';
import { InstagramIcon } from '@/app/components/icons/social-media/instagram';
import { LinkedinIcon } from '@/app/components/icons/social-media/linkedin';
import { Tooltip } from 'flowbite-react';
import Link from 'next/link';

export const ConnectWithMe = () => {
  return (
    <div className="hidden lg:flex lg:items-center lg:gap-5">
      <h4 className="text-lg lg:text-xl uppercase mb-3">Connect with me</h4>
      <ul className="flex items-center justify-between gap-4">
        <li>
          <Tooltip content={'Facebook'} placement={'bottom'}>
            <Link href={'#'} target="_blank">
              <FacebookIcon property={{ width: '1.8em', height: '1.8em' }} />
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip content={'Instagram'} placement={'bottom'}>
            <Link href={'#'} target="_blank">
              <InstagramIcon property={{ width: '1.8em', height: '1.8em' }} />
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip content={'Linkedin'} placement={'bottom'}>
            <Link href={'#'} target="_blank">
              <LinkedinIcon property={{ width: '1.8em', height: '1.8em' }} />
            </Link>
          </Tooltip>
        </li>
        <li>
          <Tooltip content={'Github'} placement={'bottom'}>
            <Link href={'#'} target="_blank">
              <GithubIcon property={{ width: '1.8em', height: '1.8em' }} />
            </Link>
          </Tooltip>
        </li>
      </ul>
    </div>
  );
};
