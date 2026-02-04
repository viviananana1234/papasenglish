import { useState } from "react";
import { Onboarding } from "./components/Onboarding";
import { DailyCard } from "./components/DailyCard";
import { Quiz } from "./components/Quiz";
import { APP_TITLE, APP_SUBTITLE } from "./constants";
import styles from "./App.module.css";

function App() {
  const [showOnboarding, setShowOnboarding] = useState(true);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
  };

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>{APP_TITLE}</h1>
        <p className={styles.subtitle}>{APP_SUBTITLE}</p>
      </header>
      <main className={styles.main}>
        <DailyCard />
        <Quiz />
      </main>
    </div>
  );
}

export default App;
