import useEmblaCarousel from "embla-carousel-react";
import { useEffect } from "react";

import { Section } from "../Section";
import { CTA } from "../CTA";

import slide1Image from "../../assets/hero/1.jpg";
import slide2Image from "../../assets/hero/2.jpg";
import slide3Image from "../../assets/hero/3.jpg";
import slide4Image from "../../assets/hero/4.jpg";
import slide5Image from "../../assets/hero/5.jpg";

import styles from "./styles.module.css";

const SLIDE_INTERVAL = 15000;

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <Section id="hero" fullWidth>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.container}>
          <li className={styles.slide}>
            <div
              className={styles.slideBackground}
              style={{ backgroundImage: `url(${slide1Image})` }}
            >
              <div className={styles.slideContent}>
                <h2>Todos merecemos fibra</h2>
                <p>
                  Los edificios pares del 124 al 144 en Avenida de Redondela
                  siguen sin acceso a fibra óptica mientras el resto del barrio
                  sí tiene conexión.
                </p>
                <CTA text="👉 Estoy interesado en fibra" />
              </div>
            </div>
          </li>
          <li className={styles.slide}>
            <div
              className={styles.slideBackground}
              style={{ backgroundImage: `url(${slide2Image})` }}
            >
              <div className={styles.slideContent}>
                <h2>Sin fibra en pleno 2026</h2>
                <p>
                  Teletrabajar, estudiar online o ver TV bajo demanda es
                  imposible para muchos vecinos de nuestra calle.
                </p>
                <CTA text="📢 Quiero una conexión decente" />
              </div>
            </div>
          </li>
          <li className={styles.slide}>
            <div
              className={styles.slideBackground}
              style={{ backgroundImage: `url(${slide3Image})` }}
            >
              <div className={styles.slideContent}>
                <h2>La fibra termina antes de nuestra puerta</h2>
                <p>
                  Las operadoras ofrecen cobertura en calles cercanas, pero
                  nuestros edificios siguen olvidados.
                </p>
                <CTA text="✍️ Añadir mi firma" />
              </div>
            </div>
          </li>
          <li className={styles.slide}>
            <div
              className={styles.slideBackground}
              style={{ backgroundImage: `url(${slide4Image})` }}
            >
              <div className={styles.slideContent}>
                <h2>No somos vecinos de segunda</h2>
                <p>
                  Necesitamos una infraestructura digital justa para todos los
                  vecinos, no solo para algunos edificios.
                </p>
                <CTA text="🤝 Unirme a la petición" />
              </div>
            </div>
          </li>
          <li className={styles.slide}>
            <div
              className={styles.slideBackground}
              style={{ backgroundImage: `url(${slide5Image})` }}
            >
              <div className={styles.slideContent}>
                <h2>Vecinos unidos por la fibra</h2>
                <p>
                  Cuantas más solicitudes consigamos, más posibilidades habrá
                  para que nos instalen fibra óptica en nuestra calle.
                </p>
                <CTA text="🚀 Firmar ahora" />
              </div>
            </div>
          </li>
        </div>
      </div>
      <button className={styles.embla__prev} onClick={goToPrev}>
        ←
      </button>
      <button className={styles.embla__next} onClick={goToNext}>
        →
      </button>
    </Section>
  );
}
