import { Header } from "../Header";

import { HeroSection } from "../HeroSection";
import { FromSection } from "../FormSection";
import { HistorySection } from "../HistorySection";
import { QASection } from "../QASection";
import { Footer } from "../Footer";
import { Contact } from "../Contact";
import { SummarySection } from "../SummarySection";
import { Separator } from "../Separator";

import styles from "./styles.module.css";

function App() {
  return (
    <main id="top" className={styles.main}>
      <Header />
      <HeroSection />
      <Separator />
      <SummarySection />
      <Separator />
      <HistorySection />
      <Separator />
      <FromSection />
      <Separator />
      <QASection />
      <Separator />
      <Contact />
      <Separator />
      <Footer />
    </main>
  );
}

export default App;
