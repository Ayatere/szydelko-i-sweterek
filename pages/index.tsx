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
        <meta name="description" content="Prace wykonane na szydełku" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <main className={styles.main}>
        <h1 className={styles.title}>Witaj u Liska</h1>
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
