import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavbarMenu } from "./navbarMenu";

type NavbarProps = {
  DarkMode: boolean;
  NightModeToggle: () => void;
};

export const Navbar = ({ NightModeToggle, DarkMode }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const offset = window.scrollY;
    const sections = ["home", "about", "portfolio", "contact"];

    if (offset > lastScrollY && offset > 100) {
      setScrolled(false);
    } else if (offset < lastScrollY) {
      setScrolled(true);
    }

    setLastScrollY(offset);

    let currentSection = "";
    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const rect = sectionElement.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    console.log("current scroll", lastScrollY);
    if (lastScrollY === 0) {
      setScrolled(true);
    }
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full transition-all duration-300 ease-in-out z-50 ${
        scrolled ? "translate-y-0" : "-translate-y-full"
      } dark:bg-slate-950 bg-white dark:text-white text-slate-900 shadow-lg`}
    >
      <nav
        className={`h-[4rem] flex items-center justify-between px-4 py-8 max-w-[90%] mx-auto `}
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/favicon/favicon-32x32.png"
            alt="favicon-32x32.png"
            unoptimized
            width={32}
            height={32}
          />
          <span className="font-medium">Hadi Nurhidayat</span>
        </Link>
        <div>
          <NavbarMenu
            NightModeToggle={NightModeToggle}
            DarkMode={DarkMode}
            ActiveSection={activeSection}
          />
        </div>
      </nav>
    </header>
  );
};
