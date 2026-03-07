import { Form } from "../Form";
import { Section } from "../Section";

import styles from "./styles.module.css";

export function FromSection() {
  return (
    <Section id="form" className={styles.formSection}>
      <div>
        <h2>Formulario</h2>
        <Form />
      </div>
    </Section>
  );
}
