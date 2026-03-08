import { Menu } from "../Menu";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#top">
        <img src="/fibra-icon.svg" alt="Logo" />
      </a>
      <h1>
        Fibra ya <span>para los vecinos de Chapela</span>
      </h1>
      <Menu />
    </header>
  );
}
