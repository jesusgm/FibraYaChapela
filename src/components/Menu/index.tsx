import styles from "./styles.module.css";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <ul>
        <li>
          <a href="#top">Inicio</a>
        </li>
        <li>
          <a href="#history">Historia</a>
        </li>
        <li>
          <a href="#form">Formulario</a>
        </li>
      </ul>
    </nav>
  );
}
