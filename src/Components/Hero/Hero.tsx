import styles from "./hero.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.sectionHero}>
        <div className={styles.firstline}>
          <div className={styles.line}></div>
          <p>SINCE 2005</p>
        </div>
        <p className={styles.exp}>Experience</p>
        <p className={styles.text}>Welcome to Apurva Arts</p>
        <p className={styles.text1}>Your One-Stop</p>
        <p className={styles.text2}>Printing Solution</p>
        <p className={styles.paragraph}>
          At Apurva Arts, we bring your ideas to life with high-quality printing
          services tailored to meet your needs. Whether it's paper, clothing,
          flex, posters, cups, visiting cards, books, or any other type of
          printing, we ensure precision, durability, and vibrant designs that
          leave a lasting impression.
        </p>

        <button className={styles.customButton}>
          <span className={styles.icon}>
            <ArrowForwardIcon
              sx={{
                fontSize: "30px",
              }}
            />
          </span>
          <span className={styles.btntext}>Get Started</span>
        </button>
      </div>
      <div className={styles.rightsection}>
        <div className={styles.sectionRightHero}>
          <img src="./printing-press.png" alt="Placeholder Image" />
        </div>
      </div>
    </div>
  );
}
