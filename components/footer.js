import Link from "next/link";
import styles from "./footer.module.css";
import packageJSON from "../package.json";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <hr />
      <ul className={styles.navItems}>
        <li className={styles.navItem}>
          <a href="https://next-auth.js.org">Cogent Labs</a>
        </li>
      </ul>
    </footer>
  );
}
