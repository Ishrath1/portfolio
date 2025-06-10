import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef();

  {
    /* fonctions pour ouvrir et fermer le menu mobile */
  }
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  {
    /*-------------------------------------------------------*/
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);
  return (
    <>
      {/* <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>*/}

      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2
      flex items-center justify-between z-50 ${
        isScroll
          ? "bg-white/20 backdrop-blur-lg shadow-sm dark:bg-darkTheme/20 dark:shadow-white/20"
          : ""
      }`}
      >
        <a href="#accueil">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt=""
            className="w-20 cursor-pointer"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
         ${
           isScroll
             ? ""
             : " bg-white/30 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
         }`}
        >
          <li>
            <a className="font-sintony" href="#accueil">
              Accueil
            </a>
          </li>
          <li>
            <a className="font-sintony" href="#parcours">
              Parcours
            </a>
          </li>
          <li>
            <a className="font-sintony" href="#projets">
              Projets
            </a>
          </li>
          <li>
            <a className="font-sintony" href="#contact">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4 ml-20">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt={isDarkMode ? "icône soleil" : "icône lune"}
              className="w-6 cursor-pointer"
            />
          </button>

          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="icône menu"
              className="w-6"
            />
          </button>
        </div>

        {/* menu petits écrans */}

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0
        w-64 z-50 h-screen bg-white transition duration-500 dark:bg-darkHover"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="icône croix"
              className="w-5 cursor-pointer"
            />
          </div>

          <li>
            <a className="font-sintony" onClick={closeMenu} href="#accueil">
              Accueil
            </a>
          </li>
          <li>
            <a className="font-sintony" onClick={closeMenu} href="#parcours">
              Parcours
            </a>
          </li>
          <li>
            <a className="font-sintony" onClick={closeMenu} href="#projets">
              Projets
            </a>
          </li>
          <li>
            <a className="font-sintony" onClick={closeMenu} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
