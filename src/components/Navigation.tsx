import Link from "next/link";
import styles from "../style/Navigation.module.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link href="/" passHref legacyBehavior>
            <a>Accueil</a>
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="/gallery" passHref legacyBehavior>
            <a>Gallery</a>
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="/about" passHref legacyBehavior>
            <a>About</a>
          </Link>
        </li>
        <li className={styles.link}>
          <Link href="/contact" passHref legacyBehavior>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
      <NavBarExternal />
    </nav>
  );
}

export default Navbar;

const NavBarExternal = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="https://www.instagram.com/">
            <FaInstagram size={20} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/">
            <FaFacebook size={20} />
          </a>
        </li>
      </ul>
    </nav>
  );
};
