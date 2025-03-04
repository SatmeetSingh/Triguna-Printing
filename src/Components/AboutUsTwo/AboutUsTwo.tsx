import styles from "./abouttwo.module.css";
import { PiClockClockwise } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";

export default function AboutUsTwo() {
  return (
    <div className={styles.aboutSection}>
      <div className={styles.abouttwo}>
        <div className={styles.card}>
          <div
            className={styles.cardInner}
            style={{
              backgroundImage: "url(./Images/1.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h1>18</h1>
            <p>Years of Experience</p>
          </div>
        </div>
        <div className={styles.about}>
          <div className={styles.heading}>
            <div className={styles.firstline}>
              <div className={styles.line}></div>
              <p>About US</p>
            </div>
            <h2>
              Apurva Arts - <span>Bringing Your Ideas </span>
              to Life!
            </h2>
          </div>
          <p>
            Apurva Arts, we believe that printing is more than just ink on
            paper—it's about bringing ideas to life with precision, creativity,
            and quality. As a leading printing solutions provider, we cater to a
            wide range of printing needs, including paper, clothing, flex,
            posters, cups, visiting cards, books, and more.
          </p>
          <div className={styles.batch}>
            <div className={styles.part}>
              <h3>250 +</h3>
              <p>Project Completed</p>
            </div>
            <div className={styles.part}>
              <h3>35 +</h3>
              <p>Award Gained</p>
            </div>
            <div className={styles.part}>
              <h3>99 %</h3>
              <p>Satisfied Customer</p>
            </div>
          </div>
          <div className={styles.founder}>
            <h1>Parvinder Dhiman</h1>
            <div className={styles.data}>
              <p>Parvinder Dhiman</p>
              <span></span>
              <p>Founder</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lowersection}>
        <div className={styles.section}>
          <div className={styles.icon}>
            <FaMoneyBillWave size={25} />
          </div>
          <div className={styles.info}>
            <h2>Reasonable Prices</h2>
            <p>Quality Design at affordable rates.</p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.icon}>
            <PiClockClockwise size={25} />
          </div>
          <div className={styles.info}>
            <h2>Timely Project Delivery</h2>
            <p>On-Time Project Completion</p>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.icon}>
            <MdGroups size={25} />
          </div>

          <div className={styles.info}>
            <h2>Professional Team</h2>
            <p>Expert designer, experiences</p>
          </div>
        </div>
      </div>
    </div>
  );
}
