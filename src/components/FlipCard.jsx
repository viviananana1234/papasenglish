import { useState } from "react";
import { TAP_HINT } from "../constants";
import styles from "./FlipCard.module.css";

export function FlipCard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={`${styles.cardWrapper} ${isFlipped ? styles.flipped : ""}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={styles.card}>
        <div className={styles.front}>
          <img src={card.image} alt={card.word || `Card ${card.id}`} />
          <span className={styles.tapHint}>{TAP_HINT}</span>
        </div>
        <div className={styles.back}>
          {card.keyPoints?.length > 0 ? (
            <ul className={styles.keyPoints}>
              {card.keyPoints.slice(0, 3).map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          ) : card.word ? (
            <div className={styles.backContent}>
              <p className={styles.word}>{card.word}</p>
              <p className={styles.meaning}>{card.meaning}</p>
            </div>
          ) : (
            <p className={styles.placeholder}>—</p>
          )}
          <span className={styles.tapHint}>{TAP_HINT}</span>
        </div>
      </div>
    </div>
  );
}
