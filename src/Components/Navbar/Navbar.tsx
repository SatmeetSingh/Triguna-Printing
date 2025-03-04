import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { Link, scrollSpy } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar/Sidebar";
import Nav from "./Nav/Nav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        <Nav />
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={false}
          offset={-70}
          duration={300}
          className={styles.Link}
        >
          <button className={styles.btn}>Business Support</button>
        </Link>
      </div>
      <button className={styles.burger} onClick={() => setIsOpen(true)}>
        <RxHamburgerMenu />
      </button>
      <div className={styles.sidebar}>
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
