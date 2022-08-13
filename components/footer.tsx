import Attributions from "./attributions";
import styles from "../styles/Footer.module.css";

export default function Footer({}) {
  return (
    <footer className={styles.footer}>
      <Attributions></Attributions>
    </footer>
  );
}
