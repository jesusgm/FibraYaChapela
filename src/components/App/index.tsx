import { Header } from "../Header";
import { HeroSection } from "../HeroSection";
import { FromSection } from "../FormSection";
import { HistorySection } from "../HistorySection";
import { Footer } from "../Footer";

import styles from "./styles.module.css";

function App() {
  return (
    <main id="top" className={styles.main}>
      <Header />
      <HeroSection />
      <HistorySection />
      <FromSection />
      <Footer />
    </main>
  );
}

export default App;
