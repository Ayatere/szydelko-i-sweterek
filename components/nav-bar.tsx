import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/NavBar.module.css";
export default function NavBar({}) {
  return (
    <nav className={styles.nav}>
      <Image
        src={"/images/fox_" + (Math.floor(Math.random() * 4) + 1) + ".png"}
        alt="lisek"
        height={50}
        width={50}
        layout="intrinsic"
      ></Image>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">
            <a>Strona główna</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/o-stronie">
            <a>O stronie</a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="/moje-prace">
            <a>Moje prace</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
