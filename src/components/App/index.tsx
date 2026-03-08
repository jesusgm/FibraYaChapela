import { useRef, useEffect, useState } from "react";
import { Header } from "../Header";

import { HeroSection } from "../HeroSection";
import { FormSection } from "../FormSection";
import { HistorySection } from "../HistorySection";
import { QASection } from "../QASection";
import { Footer } from "../Footer";
import { Contact } from "../Contact";
import { SummarySection } from "../SummarySection";
import { Separator } from "../Separator";
import { FloatingCTA } from "../FloatingCTA";

import styles from "./styles.module.css";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFormVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <main id="top" className={styles.main}>
      <Header />
      <HeroSection />
      <Separator />
      <SummarySection />
      <Separator />
      <HistorySection />
      <Separator />
      <FormSection ref={ref} />
      <Separator />
      <QASection />
      <Separator />
      <Contact />
      <Separator />
      <Footer />
      <FloatingCTA hidden={isFormVisible} />
    </main>
  );
}

export default App;
