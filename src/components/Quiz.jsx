import { useState, useMemo } from "react";
import { getSessionCardIndex } from "../utils/dailyCard";
import { shuffle } from "../utils/shuffle";
import { CARDS } from "../data/cards";
import styles from "./Quiz.module.css";

const QUIZ_CARDS = CARDS.filter((c) => c.options.length > 0);

function getRandomCard(excludeId) {
  const pool = excludeId ? QUIZ_CARDS.filter((c) => c.id !== excludeId) : QUIZ_CARDS;
  return pool[Math.floor(Math.random() * pool.length)];
}

export function Quiz() {
  const [card, setCard] = useState(() => {
    const todayIndex = getSessionCardIndex(QUIZ_CARDS);
    return QUIZ_CARDS[todayIndex];
  });
  const [questionNumber, setQuestionNumber] = useState(1);
  const [selected, setSelected] = useState(null);
  const [passed, setPassed] = useState(false);

  const shuffledOptions = useMemo(() => shuffle(card.options), [card.id]);
  const hasAnswered = selected !== null || passed;
  const isCorrect = selected && selected.toLowerCase() === card.word.toLowerCase();

  const handleSelect = (option) => {
    if (hasAnswered) return;
    setSelected(option);
  };

  const handlePass = () => {
    if (hasAnswered) return;
    setPassed(true);
  };

  const handleNext = () => {
    setCard(getRandomCard(card.id));
    setQuestionNumber((n) => n + 1);
    setSelected(null);
    setPassed(false);
  };

  const getOptionClass = (option) => {
    if (!hasAnswered) return styles.option;
    if (option.toLowerCase() === card.word.toLowerCase())
      return `${styles.option} ${styles.correct}`;
    if (option === selected)
      return `${styles.option} ${styles.wrong}`;
    return `${styles.option} ${styles.disabled}`;
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Quiz</h2>
      <p className={styles.progress}>
        Question {questionNumber}
      </p>
      <p className={styles.question}>
        What is the English expression for &quot;{card.meaning}&quot;?
      </p>
      <div className={styles.options}>
        {shuffledOptions.map((option) => (
          <button
            key={option}
            className={getOptionClass(option)}
            onClick={() => handleSelect(option)}
            disabled={hasAnswered}
          >
            {option}
          </button>
        ))}
      </div>
      {!hasAnswered && (
        <button className={styles.passBtn} onClick={handlePass}>
          PASS
        </button>
      )}
      {hasAnswered && (
        <>
          <p className={isCorrect ? styles.feedbackCorrect : styles.feedbackWrong}>
            {isCorrect ? "Correct!" : `Answer: ${card.word}`}
          </p>
          <button className={styles.nextBtn} onClick={handleNext}>
            NEXT
          </button>
        </>
      )}
    </section>
  );
}
