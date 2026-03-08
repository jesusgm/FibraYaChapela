import styles from "./styles.module.css";

interface FloatingCTAProps {
  hidden?: boolean;
}

export function FloatingCTA({ hidden = false }: FloatingCTAProps) {
  if (hidden) return null;

  return (
    <div className={styles.floatingCta}>
      <a href="#form">¡Ir al formulario!</a>
    </div>
  );
}
