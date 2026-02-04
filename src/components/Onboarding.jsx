import { APP_TITLE, APP_SUBTITLE } from "../constants";
import styles from "./Onboarding.module.css";

export function Onboarding({ onComplete }) {
  return (
    <div className={styles.screen}>
      <div className={styles.content}>
        <div className={styles.papa}>
          <div className={styles.papaFace}>
            <div className={styles.eyes}>
              <span className={styles.eye} />
              <span className={styles.eye} />
            </div>
            <div className={styles.smile} />
            <div className={styles.cardHand} />
          </div>
          <p className={styles.papaName}>{APP_TITLE}</p>
        </div>
        <p className={styles.tagline}>One card a day,<br />build your English</p>
        <button className={styles.startBtn} onClick={onComplete}>
          Next
        </button>
      </div>
    </div>
  );
}
