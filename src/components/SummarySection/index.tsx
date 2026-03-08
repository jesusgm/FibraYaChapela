import { CTA } from "../CTA";
import { Section } from "../Section";

import styles from "./styles.module.css";

export function SummarySection() {
  return (
    <Section id="summary" className={styles.summary}>
      <h2>Resumen</h2>
      <p>Llevamos años intentando que nos instalen fibra. Movistar se niega.</p>
      <p>
        Hemos encontrado una empresa ({" "}
        <strong>
          <a target="_blank" href="https://www.aureatelecom.com/">
            Aurea Telecom
          </a>
        </strong>
        ) que está dispuesta a desplegar fibra propia pero necesita saber
        cuantos interesados hay.
      </p>
      <p>
        Hemos visitado varias viviendas preguntando pero lleva tiempo que no
        disponemos para hacerlo por lo que hemos creado esta web para recopilar
        interesados.
      </p>
      <p className={styles.cta}>
        <CTA text="Rellena el formulario 👇" />
      </p>
    </Section>
  );
}
