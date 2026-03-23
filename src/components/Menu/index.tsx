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
        data-analytics-event="menu-toggle"
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
          <a
            href="#top"
            onClick={() => setIsOpen(false)}
            data-analytics-event="menu-item-click"
            data-payload={{ element: "top" }}
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href="#summary"
            onClick={() => setIsOpen(false)}
            data-analytics-event="menu-item-click"
            data-payload={{ element: "summary" }}
          >
            Resumen
          </a>
        </li>
        <li>
          <a
            href="#history"
            onClick={() => setIsOpen(false)}
            data-analytics-event="menu-item-click"
            data-payload={{ element: "history" }}
          >
            Historia
          </a>
        </li>
        <li>
          <a
            href="#form"
            onClick={() => setIsOpen(false)}
            data-analytics-event="menu-item-click"
            data-payload={{ element: "form" }}
          >
            Formulario
          </a>
        </li>
        <li>
          <a
            href="#preguntas-frecuentes"
            onClick={() => setIsOpen(false)}
            data-analytics-event="menu-item-click"
            data-payload={{ element: "faqs" }}
          >
            Dudas?
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            data-analytics-event="menu-item-click"
            data-payload={{ element: "contact" }}
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
}
