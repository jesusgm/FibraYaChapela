import { Section } from "../Section";
import styles from "./styles.module.css";

export function Contact() {
  return (
    <Section id="contact" className={styles.contact}>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScTuU5P5ukBRti9Af4ge7rgVDw3DNJ_xgOcO7MuQ3JM3JvRzA/viewform?embedded=true"
        width="100%"
        height="650px"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
      >
        Cargando…
      </iframe>
    </Section>
  );
}
