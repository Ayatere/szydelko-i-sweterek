import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavBar from "../components/nav-bar";

import Footer from "../components/footer";
import Image from "next/image";
import StarComponent from "../components/star";
import { useParallax } from "react-scroll-parallax";

type Star = {
  top: number;
  left: number;
  height: number;
  width: number;
  blur: number;
  spread: number;
};

const Home: NextPage<{ stars: Star[] }> = ({ stars }) => {
  const mountainsParallax2 = useParallax({ speed: -2 }).ref;
  const mountainsParallax4 = useParallax({ speed: -4 }).ref;
  const mountainsParallax5 = useParallax({ speed: -5 }).ref;
  const textParallax = useParallax({ speed: -50 }).ref;

  return (
    <div className={styles.container}>
      <Head>
        <title>Szydełkowy lisek</title>
        <meta name="description" content="Prace wykonane na szydełku" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <main>
        <div
          className="absolute top-0 left-0 -z-10  h-screen w-screen overflow-hidden"
          id="stars"
        >
          <div
            id="starsRotation"
            className={`h-screen w-screen transform-gpu ` + styles.stars}
          >
            {stars.map((star, idx) => (
              <StarComponent
                top={star.top}
                left={star.left}
                height={star.height}
                width={star.width}
                blur={star.blur}
                spread={star.spread}
                key={idx}
              ></StarComponent>
            ))}
          </div>
        </div>

        <div
          id="mountains"
          className="absolute overflow-hidden top-0 left-0 z-30 h-screen w-screen "
        >
          <div
            ref={mountainsParallax2 as React.RefObject<HTMLDivElement>}
            id="mountain-1"
            className="absolute h-1/2 w-1/2 -left-[20%] -bottom-[5%] z-8"
          >
            <Image
              src={"/images/path430.svg"}
              alt={"Góry 1"}
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            ></Image>
          </div>
          <div
            id="mountain-2"
            className="absolute h-1/2 w-1/2 -left-[10%] -bottom-[5%] z-10"
            ref={mountainsParallax4 as React.RefObject<HTMLDivElement>}
          >
            <Image
              src={"/images/path432.svg"}
              alt={"Góry 2"}
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            ></Image>
          </div>
          <div
            id="mountain-3"
            className="absolute h-1/2 w-1/2 left-[5%] -bottom-[5%] z-8"
            ref={mountainsParallax5 as React.RefObject<HTMLDivElement>}
          >
            <Image
              src={"/images/path434.svg"}
              alt={"Góry 3"}
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            ></Image>
          </div>
          <div
            id="mountain-4"
            className="absolute h-1/2 w-1/2 -right-[20%] -bottom-[5%]"
            ref={mountainsParallax5 as React.RefObject<HTMLDivElement>}
          >
            <Image
              src={"/images/path444.svg"}
              alt={"Góry 4"}
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            ></Image>
          </div>
          <div
            id="mountain-5"
            className="absolute h-1/2 w-1/2 -right-[10%] -bottom-[5%]"
            ref={mountainsParallax4 as React.RefObject<HTMLDivElement>}
          >
            <Image
              src={"/images/path442.svg"}
              alt={"Góry 5"}
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            ></Image>
          </div>
          <div
            id="mountain-6"
            className="absolute h-1/2 w-1/2 right-[5%] -bottom-[5%]"
            ref={mountainsParallax2 as React.RefObject<HTMLDivElement>}
          >
            <Image
              src={"/images/path440.svg"}
              alt={"Góry 6"}
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
            ></Image>
          </div>
        </div>
        <div
          ref={textParallax as React.RefObject<HTMLDivElement>}
          className="snap-start h-screen flex items-center -z-10"
        >
          <h1 className="text-5xl font-bold">Witaj u Liska</h1>
        </div>
        <div className="snap-start h-screen flex items-center w-screen bg-[#040218]">
          <h1 className="text-5xl font-bold">Witaj u Liska</h1>
        </div>
        <div className="snap-start h-screen flex items-center">
          <h1 className="text-5xl font-bold">Witaj u Liska</h1>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

Home.getInitialProps = async ({ req }) => {
  const stars: Star[] = [
    {
      top: 30,
      left: 25,
      height: 3,
      width: 3,
      blur: 10,
      spread: 2,
    },
  ];
  for (let i = 0; i < 200; i++) {
    stars.push(generateStar());
  }
  return { stars };

  function generateStar(): Star {
    const size = Math.random() * 0.2 + 0.1;
    let star: Star = {
      top: Math.random() * 300 - 100,
      left: Math.random() * 300 - 100,
      height: size,
      width: size,
      blur: Math.random() * 3 + 9,
      spread: Math.random() * 1.5 + 1,
    };
    return star;
  }
};

export default Home;
