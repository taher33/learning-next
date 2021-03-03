import styles from "../styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
function NavBar() {
  return (
    <div className="container">
      <div className={styles.nav}>
        <Image src="/logo.png" width={75} height={60} />

        <ul className={styles.navlinks}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>

          <Link href="/people">
            <li>Users</li>
          </Link>

          <Link href="/login">
            <li>login</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
