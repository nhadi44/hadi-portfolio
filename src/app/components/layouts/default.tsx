"use client";
import localFont from "next/font/local";
import React, { useEffect, useState } from "react";
import { Navbar } from "../navbar";

const poppins = localFont({
  src: [
    {
      path: "../../fonts/Poppins/Poppins-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../fonts/Poppins/Poppins-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../fonts/Poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../fonts/Poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/Poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../fonts/Poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../fonts/Poppins/Poppins-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../fonts/Poppins/Poppins-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../../fonts/Poppins/Poppins-Black.ttf",
      weight: "900",
    },
    {
      path: "../../fonts/Poppins/Poppins-BlackItalic.ttf",
      weight: "900",
    },
  ],
  variable: "--fonts-poppins",
});

export const DefaultLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedMode = localStorage.getItem("theme");
      if (storedMode) {
        setDarkMode(storedMode === "dark");
      } else {
        // Jika belum ada preferensi, gunakan preferensi sistem
        const darkPreference = window.matchMedia(
          "(prefers-color-scheme: dark)"
        );
        setDarkMode(darkPreference.matches);
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <body
      className={`${poppins.className} antialiased
        ${darkMode ? "dark" : "light"}`}
    >
      <div className="dark:bg-slate-900 dark:text-white transition-all duration-500 min-h-screen">
        <Navbar NightModeToggle={toggleDarkMode} DarkMode={darkMode} />
        <main>{children}</main>
      </div>
    </body>
  );
};
