import Link from 'next/link';
import { MoonIcon } from '../icons/dark';
import { SunIcon } from '../icons/sun';
import { Menu } from '@/app/components/icons/menu';
import { useAppDispatch } from '@/libs/hook';
import { openOffcanvas } from '@/libs/features/offcanvasSlice';

type NavbarMenuProps = {
  NightModeToggle: () => void;
  DarkMode: boolean;
  ActiveSection: string;
};

export const NavbarMenu = (
  {
    DarkMode,
    NightModeToggle,
    ActiveSection,
  }: NavbarMenuProps) => {

  const dispatch = useAppDispatch();

  return (
    <ul className="flex items-center gap-7 text-[14px]">
      <li className="hidden lg:block">
        <Link
          href={'#home'}
          className={
            ActiveSection === 'home' ? 'text-blue-400 font-semibold' : ''
          }>
          Home
        </Link>
      </li>
      <li className="hidden lg:block">
        <Link
          href={'#about'}
          className={
            ActiveSection === 'about' ? 'text-blue-400 font-semibold' : ''
          }>
          About Me
        </Link>
      </li>
      <li className="hidden lg:block">
        <Link
          href={'#portfolio'}
          className={
            ActiveSection === 'portfolio' ? 'text-blue-400 font-semibold' : ''
          }>
          Porfolio
        </Link>
      </li>
      <li className="hidden lg:block">
        <Link
          href={'#experience'}
          className={
            ActiveSection === 'experience' ? 'text-blue-400 font-semibold' : ''
          }>
          My Experience
        </Link>
      </li>
      <li className="hidden lg:block">
        <Link
          href={'#contact'}
          className={
            ActiveSection === 'contact' ? 'text-blue-400 font-semibold' : ''
          }>
          Contact
        </Link>
      </li>
      <li className="hidden lg:block">
        <Link href={'#'}>My Blog</Link>
      </li>
      <li className="hidden lg:block">
        <Link
          href={'#'}
          className="bg-blue-500 px-5 py-2 rounded-md text-white hover:bg-blue-600 transition duration-100 ease-in">
          Resume
        </Link>
      </li>
      <li>
        <Link href={'#'} className="flex items-center">
          <button onClick={NightModeToggle}>
            {DarkMode ? (
              <MoonIcon className="size-[1rem]" />
            ) : (
              <SunIcon className="size-[1rem]" />
            )}
          </button>
        </Link>
      </li>
      <li className="flex items-center lg:hidden">
        <button onClick={() => dispatch(openOffcanvas())}>
          <Menu property={{ className: 'size-6' }} />
        </button>
      </li>
    </ul>
  );
};
