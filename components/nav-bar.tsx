import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css";
import { AiOutlineMenu } from "react-icons/ai";

export default function NavBar({ foxImageId = 1 }) {
  const [navClass, setNavClass] = useState("scrolledUp");
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
  return (
    // <nav className={`${styles.nav} ${styles[navClass]}`}>
    <nav
      className={`fixed z-50 w-screen px-12 py-4 flex items-center text-lg gap-8 transition  ${styles.nav} ${styles[navClass]}`}
    >
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-[0_0_25px_0_rgba(255,255,255,1)] ">
        <Image
          src={"/images/fox_" + foxImageId + ".png"}
          alt="lisek"
          height={50}
          width={50}
          objectFit="contain"
        ></Image>
      </div>
      <Link href="/">
        <a>Szydełkowy lisek</a>
      </Link>
      <ul className={"flex gap-12 list-none " + styles.ul}>
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
      <AiOutlineMenu className={styles.menu}></AiOutlineMenu>
    </nav>
  );
}
