import styles from "./styles.module.css";
import cn from "classnames";

export function Section({
  id,
  children,
  className,
  fullWidth = false,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}) {
  return (
    <section id={id} className={cn(styles.section, className)}>
      <div className={cn(styles.container, fullWidth && styles.fullWidth)}>
        {children}
      </div>
    </section>
  );
}
