import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link, scrollSpy } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar/Sidebar";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60 && window.innerWidth > 768) {
        setIsSticky(true);
      } else if (window.innerWidth <= 768) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.navbar} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.img}>
        <img src="./Apurvaarts.png" alt="Placeholder Image" />
      </div>
      <div className={styles.section}>
        <nav className={styles.nav}>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={false}
            duration={300}
            className={styles.Link}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="services"
            spy={true}
            smooth={false}
            offset={-80}
            duration={300}
            className={styles.Link}
          >
            Services
          </Link>

          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={false}
            offset={-70}
            duration={300}
            className={styles.Link}
          >
            About Me
          </Link>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={false}
            offset={-70}
            duration={300}
            className={styles.Link}
          >
            Contact
          </Link>
        </nav>
        <button className={styles.btn}>Get Started</button>
      </div>
      <div className={styles.burger}>
        <RxHamburgerMenu />
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  );
}
