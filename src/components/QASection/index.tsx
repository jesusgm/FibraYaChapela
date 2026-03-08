import { useState } from "react";
import { Section } from "../Section";
import styles from "./styles.module.css";

interface QAItem {
  question: string;
  answer: string;
}

const qaData: QAItem[] = [
  {
    question: "¿Qué es Fibra Ya?",
    answer:
      "Fibra Ya es una iniciativa para llevar conexión de fibra óptica de alta velocidad a los vecinos de Chapela, mejorando la calidad del servicio de internet en nuestra zona.",
  },
  {
    question: "¿Si introduzco mis datos luego estoy obligado a contratar?",
    answer:
      "No, solo estás registrando tu interés. Puedes contratar cuando quieras o no contratar si no te convence. Esto es para que la empresa sepa cuánta demanda hay en la zona y evalúe si le compensa.",
  },
  {
    question: "¿Cuánto cuesta el servicio?",
    answer:
      "En su página web puedes hacerte una idea de los precios que ofrecen: <a href='https://www.aureatelecom.com/cat_particulares/fibra' target='_blank'>https://www.aureatelecom.com/cat_particulares/fibra</a>",
  },
  {
    question: "¿Cuál es el tratamiento que hacen con los datos?",
    answer:
      "Los datos se tratarán de forma confidencial y solo se usarán para evaluar la viabilidad de la instalación y gestionar el servicio. No se cederán a terceros sin tu consentimiento.",
  },
  {
    question: "¿Hay algún coste de instalación?",
    answer:
      "No, la instalación inicial es gratuita para todos los vecinos que se registren durante la fase de lanzamiento. No hay costes ocultos ni cuotas de alta.",
  },
  {
    question: "¿Hay alguna permanencia?",
    answer:
      "En un primer lugar, no hay permanencia obligatoria. Pero está sujeto a evaluación de viabilidad economica por la empresa. Depende del número de personas que estén interesadas.",
  },
  {
    question: "¿Cómo puedo mostrar mi interés?",
    answer:
      "Puedes rellenar los datos a través de nuestro formulario web. Cuantos más seamos, más fácil será que consigamos tener fibra!",
  },
];

export function QASection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section id="preguntas-frecuentes">
      <div className={styles.container}>
        <h2 className={styles.title}>Preguntas Frecuentes</h2>
        <p className={styles.subtitle}>
          Resuelve tus dudas sobre Fibra Ya en Chapela
        </p>

        <div className={styles.accordion}>
          {qaData.map((item, index) => (
            <div key={index} className={styles.accordionItem}>
              <button
                className={styles.question}
                onClick={() => toggleQuestion(index)}
                aria-expanded={activeIndex === index}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span
                  className={`${styles.icon} ${activeIndex === index ? styles.iconOpen : ""}`}
                >
                  +
                </span>
              </button>

              <div
                className={`${styles.answer} ${activeIndex === index ? styles.answerOpen : ""}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
