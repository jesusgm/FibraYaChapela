import { Menu } from "../Menu";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Fibra Ya para los vecinos de Chapela</h1>
      <Menu />
    </header>
  );
}
