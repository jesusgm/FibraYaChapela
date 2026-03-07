import styles from "./styles.module.css";

export function CTA({ text = "Ir al formulario" }: { text?: string }) {
  return (
    <a className={styles.cta} href="#form">
      {text}
    </a>
  );
}
