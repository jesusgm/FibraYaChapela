import styles from "./styles.module.css";

interface FloatingCTAProps {
  hidden?: boolean;
}

export function FloatingCTA({ hidden = false }: FloatingCTAProps) {
  if (hidden) return null;

  return (
    <div className={styles.floatingCta}>
      <a
        href="#form"
        data-analytics-event="floating-cta-click"
        data-payload={{ element: "Ir al formulario" }}
      >
        ¡Ir al formulario!
      </a>
    </div>
  );
}
