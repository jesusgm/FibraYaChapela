import { useState } from "react";
import styles from "./styles.module.css";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.menu}>
      <button
        className={styles.hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`${styles.hamburgerLine} ${isOpen ? styles.open : ""}`}
        ></span>
        <span
          className={`${styles.hamburgerLine} ${isOpen ? styles.open : ""}`}
        ></span>
        <span
          className={`${styles.hamburgerLine} ${isOpen ? styles.open : ""}`}
        ></span>
      </button>

      <ul className={`${styles.menuList} ${isOpen ? styles.open : ""}`}>
        <li>
          <a href="#top" onClick={() => setIsOpen(false)}>
            Inicio
          </a>
        </li>
        <li>
          <a href="#summary" onClick={() => setIsOpen(false)}>
            Resumen
          </a>
        </li>
        <li>
          <a href="#history" onClick={() => setIsOpen(false)}>
            Historia
          </a>
        </li>
        <li>
          <a href="#form" onClick={() => setIsOpen(false)}>
            Formulario
          </a>
        </li>
        <li>
          <a href="#preguntas-frecuentes" onClick={() => setIsOpen(false)}>
            Dudas?
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setIsOpen(false)}>
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
