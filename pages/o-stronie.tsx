import type { NextPage } from "next";

import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/nav-bar";
import Attributions from "../components/attributions";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Szydełkowy lisek</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={styles.main}>
        <h1 className={styles.title}>O stronie</h1>
        <p>
          Znajdziesz na tej stronie moje ubrania wykonane na szydełku.
          <br />W przyszłości możliwe, że dodam również kontakt do siebie w celu
          zakupienia dostępnych prac
        </p>
      </main>
      <footer className={styles.footer}>
        Powered by NextJS
        <br />
        <Attributions></Attributions>
      </footer>
    </div>
  );
};

export default Home;