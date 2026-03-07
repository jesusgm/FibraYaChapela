import styles from "./styles.module.css";

interface GlossaryItem {
  id: string;
  element: React.ReactNode;
}

interface GlossaryProps {
  title?: string;
  items: GlossaryItem[];
}

export function Glossary({ title = "Glosario", items }: GlossaryProps) {
  return (
    <div className={styles.glossary}>
      <h2>{title}</h2>
      <br />
      <ol>
        {items.map((item) => (
          <li key={item.id} id={item.id}>
            {item.element}
          </li>
        ))}
      </ol>
    </div>
  );
}
