import Link from 'next/link';
import { MoonIcon } from '../icons/dark';
import { SunIcon } from '../icons/sun';

type NavbarMenuProps = {
  NightModeToggle: () => void;
  DarkMode: boolean;
  ActiveSection: string;
};

export const NavbarMenu = ({
  DarkMode,
  NightModeToggle,
  ActiveSection,
}: NavbarMenuProps) => {
  return (
    <ul className="flex items-center gap-7 text-[14px]">
      <li>
        <Link
          href={'#home'}
          className={
            ActiveSection === 'home' ? 'text-blue-400 font-semibold' : ''
          }>
          Home
        </Link>
      </li>
      <li>
        <Link
          href={'#about'}
          className={
            ActiveSection === 'about' ? 'text-blue-400 font-semibold' : ''
          }>
          About Me
        </Link>
      </li>
      <li>
        <Link
          href={'#portfolio'}
          className={
            ActiveSection === 'portfolio' ? 'text-blue-400 font-semibold' : ''
          }>
          Porfolio
        </Link>
      </li>
      <li>
        <Link
          href={'#contact'}
          className={
            ActiveSection === 'contact' ? 'text-blue-400 font-semibold' : ''
          }>
          Contact
        </Link>
      </li>
      <li>
        <Link href={'#'}>My Blog</Link>
      </li>
      <li>
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
    </ul>
  );
};
