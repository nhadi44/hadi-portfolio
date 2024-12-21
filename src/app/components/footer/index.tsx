import Link from 'next/link';
import { Tooltip } from 'flowbite-react';
import { FacebookIcon } from '@/app/components/icons/social-media/facebook';
import { InstagramIcon } from '@/app/components/icons/social-media/instagram';
import { LinkedinIcon } from '@/app/components/icons/social-media/linkedin';
import { GithubIcon } from '@/app/components/icons/social-media/github';

export const FooterComponent = () => {
  return (
    <footer className="bg-blue-100 dark:bg-slate-950">
      <div className="max-w-full lg:max-w-[70%] mx-auto px-4 py-5">
        <div className="grid grid-cols-2  lg:grid-cols-3 mb-7 gap-4">
          <div>
            <Link
              href="/"
              className="text-sm lg:text-2xl font-semibold block mb-3">
              Hadi Nurhidayat
            </Link>
            <p className="text-xs lg:text-sm text-slate-700 dark:text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              dicta dignissimos enim error exercitationem incidunt iste
              laboriosam laudantium minima odit, officia porro qui quidem quis
              quo rerum suscipit tempore, ullam.
            </p>
          </div>
          <div className="px-10">
            <h1 className="text-sm lg:text-[15px] font-semibold mb-4">Menu</h1>
            <ul className="text-xs lg:text-sm">
              <li className="mb-2 text-slate-700 dark:text-slate-400">
                <Link href="/">Home</Link>
              </li>
              <li className="mb-2 text-slate-700 dark:text-slate-400">
                <Link href="#about">About Me</Link>
              </li>
              <li className="mb-2 text-slate-700 dark:text-slate-400">
                <Link href="#portfolio">Portfolio</Link>
              </li>
              <li className="mb-2 text-slate-700 dark:text-slate-400">
                <Link href="#experience">My Experience</Link>
              </li>
              <li className="mb-2 text-slate-700 dark:text-slate-400">
                <Link href="#contact">Contact</Link>
              </li>
              <li className="mb-2 text-slate-700 dark:text-slate-400">
                <Link href="/">My Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-sm lg:text-[15px] font-semibold mb-4">
              Follow Me
            </h1>
            <div className="flex gap-8 items-center">
              <Tooltip content={'Facebook'} placement={'bottom'}>
                <Link href={'#'} target="_blank">
                  <FacebookIcon
                    property={{ width: '1.8em', height: '1.8em' }}
                  />
                </Link>
              </Tooltip>
              <Tooltip content={'Instagram'} placement={'bottom'}>
                <Link href={'#'} target="_blank">
                  <InstagramIcon
                    property={{ width: '1.8em', height: '1.8em' }}
                  />
                </Link>
              </Tooltip>
              <Tooltip content={'Linkedin'} placement={'bottom'}>
                <Link href={'#'} target="_blank">
                  <LinkedinIcon
                    property={{ width: '1.8em', height: '1.8em' }}
                  />
                </Link>
              </Tooltip>
              <Tooltip content={'Github'} placement={'bottom'}>
                <Link href={'#'} target="_blank">
                  <GithubIcon property={{ width: '1.8em', height: '1.8em' }} />
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
        <h2 className="text-center text-sm text-slate-700 dark:text-slate-400">
          Copyright &copy; 2024 Hadi Nurhidayat
        </h2>
      </div>
    </footer>
  );
};
