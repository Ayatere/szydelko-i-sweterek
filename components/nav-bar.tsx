import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavBar({ foxImageId = 1 }) {
  const [navClass, setNavClass] = useState("scrolledUp");
  const [mobileMenuExtended, setMobileMenuExtended] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    if (lastScrollPosition < window.scrollY && window.scrollY > 50) {
      setNavClass("scrolledDown");
    } else {
      setNavClass("scrolledUp");
    }
    setLastScrollPosition(window.scrollY);
  };

  const handleMenuClick = () => {
    setMobileMenuExtended(!mobileMenuExtended);
  };
  const mobileMenuClass = mobileMenuExtended ? "open" : "closed";
  console.log(mobileMenuExtended);
  return (
    // <nav className={`${styles.nav} ${styles[navClass]}`}>
    <div>
      <nav
        className={`fixed z-50 w-screen px-4 md:px-12 py-2 md:py-4 flex items-center text-lg gap-8 transition justify-between md:justify-start`}
      >
        <div className=" w-6 h-6 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-[0_0_25px_0_rgba(255,255,255,1)] ">
          <div className="relative w-full h-full m-1 md:m-2">
            <Image
              src={"/images/fox_" + foxImageId + ".png"}
              alt="lisek"
              layout="fill"
              objectFit="contain"
            ></Image>
          </div>
        </div>
        <Link href="/">
          <a>Szydełkowy lisek</a>
        </Link>
        <ul className={"hidden md:flex gap-12 list-none"}>
          <li className="grow shrink-0">
            <Link href="/o-stronie">
              <a>O stronie</a>
            </Link>
          </li>
          <li className="grow shrink-0">
            <Link href="/moje-prace">
              <a>Moje prace</a>
            </Link>
          </li>
        </ul>
        <AiOutlineMenu
          className="block md:hidden"
          onClick={handleMenuClick}
        ></AiOutlineMenu>
      </nav>

      <nav
        className={`fixed top-16 -right-96 z-50 w-screen flex md:hidden justify-center items-center text-lg gap-8 transition ${styles[mobileMenuClass]}`}
      >
        <ul className="flex flex-col gap-8 list-none">
          <li className="grow shrink-0">
            <Link href="/o-stronie">
              <a>O stronie</a>
            </Link>
          </li>
          <li className="grow shrink-0">
            <Link href="/moje-prace">
              <a>Moje prace</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
