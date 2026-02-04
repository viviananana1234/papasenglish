import { useState } from "react";
import { FlipCard } from "./FlipCard";
import { CardIcon } from "./CardIcon";
import { getShuffledCardOrder } from "../utils/dailyCard";
import { CARDS } from "../data/cards";
import styles from "./DailyCard.module.css";

export function DailyCard() {
  const [shuffledOrder] = useState(() => getShuffledCardOrder(CARDS));
  const [position, setPosition] = useState(0);
  const card = CARDS[shuffledOrder[position]];

  const handleNext = () => setPosition((p) => (p + 1) % CARDS.length);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.icon}>
          <CardIcon />
        </div>
        <div className={styles.label}>
          <span className={styles.badge}>Today&apos;s Delivery</span>
          <h2 className={styles.title}>Today&apos;s Card</h2>
        </div>
      </div>
      <div className={styles.cardFrame}>
        <FlipCard card={card} key={card.id} />
        <button className={styles.nextCardBtn} onClick={handleNext}>
          Next Card
        </button>
      </div>
    </section>
  );
}
