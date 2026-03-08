import { forwardRef } from "react";
import styles from "./styles.module.css";
import cn from "classnames";

export const Section = forwardRef<
  HTMLElement,
  {
    id: string;
    children: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
  }
>(({ id, children, className, fullWidth = false }, ref) => {
  return (
    <section id={id} className={cn(styles.section, className)} ref={ref}>
      <div className={cn(styles.container, fullWidth && styles.fullWidth)}>
        {children}
      </div>
    </section>
  );
});

Section.displayName = "Section";
