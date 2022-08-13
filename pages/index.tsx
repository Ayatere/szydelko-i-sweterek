import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/nav-bar";

import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Szydełkowy lisek</title>
        <meta name="description" content="Prace wykonane na szydełku" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <main>
        <h1 className="text-5xl font-bold">Witaj u Liska</h1>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
