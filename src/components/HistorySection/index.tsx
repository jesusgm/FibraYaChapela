import { Section } from "../Section";
import { Glossary } from "../Glossary";

import styles from "./styles.module.css";

const glossaryItems = [
  {
    id: "1",
    element: (
      <>
        <strong>CTO:</strong> Caja de Terminación Óptica. Es una pequeña caja
        verde o gris que se instala en la calle y funciona como el punto de
        conexión donde llega la fibra óptica principal y desde donde se
        distribuye a todas las casas del barrio. Sin CTO cerca, no hay fibra.
      </>
    ),
  },
  {
    id: "2",
    element: (
      <>
        <strong>Fibra óptica:</strong> Un tipo de cable muy fino que lleva
        internet a velocidades altísimas usando luz. Es mucho más rápido y
        estable que el internet tradicional por teléfono o el 4G/5G.
      </>
    ),
  },
  {
    id: "3",
    element: (
      <>
        <strong>Router por radio:</strong> Un dispositivo que te da internet
        usando antenas y ondas de radio, similar a cómo funciona la radio o el
        WiFi pero a larga distancia. Suele ser más lento e inestable que la
        fibra.
      </>
    ),
  },
  {
    id: "4",
    element: (
      <>
        <strong>Router 4G/5G:</strong> Un router que conecta a internet usando
        la misma red que los móviles. Funciona como un móvil gigante que da WiFi
        a toda la casa, pero puede ser lento si muchos gente lo usan a la vez o
        si la cobertura es mala.
      </>
    ),
  },
  {
    id: "5",
    element: (
      <>
        <strong>Monopolio:</strong> Cuando una sola empresa controla todo el
        mercado de un servicio. En este caso, Movistar controla la mayoría de
        las infraestructuras de fibra, lo que hace que otras empresas no puedan
        competir libremente.
      </>
    ),
  },
  {
    id: "6",
    element: (
      <>
        <strong>Red troncal:</strong> Son las "autopistas" principales de fibra
        óptica que recorren toda España llevando internet a alta velocidad.
        Desde estas autopistas salen "carreteras secundarias" que llegan a los
        barrios.
      </>
    ),
  },
  {
    id: "7",
    element: (
      <>
        <strong>Tendido de fibra:</strong> El proceso de instalar los cables de
        fibra óptica desde la red principal hasta las casas. Implica cavar
        zanjas, instalar postes y conectar todos los puntos necesarios.
      </>
    ),
  },
  {
    id: "8",
    element: (
      <>
        <strong>Subvención UNICO 2022:</strong> Un programa del gobierno que dio
        dinero público a empresas para llevar internet a zonas que no tenían
        buena conexión, como nuestro barrio.
      </>
    ),
  },
  {
    id: "9",
    element: (
      <>
        <strong>Infraestructura:</strong> Todas las instalaciones físicas
        necesarias para dar un servicio: cables, cajas, postes, antenas, etc. Es
        como los "huesos" del sistema de internet.
      </>
    ),
  },
];

export function HistorySection() {
  return (
    <Section id="history" className={styles.history}>
      <h2>Historia</h2>
      <p>
        Muchos vecinos de nuestro barrio llevamos más de tres años en una lucha
        constante por conseguir un servicio que debería ser básico en el siglo
        XXI: la conexión a fibra óptica
        <sup>
          <a href="#2">2</a>
        </sup>
        . Lo que comenzó como una ilusión de modernización y progreso para
        nuestra comunidad se ha transformado en una pesadilla burocrática y
        técnica que nos mantiene completamente desconectados del mundo digital,
        afectando cada aspecto de nuestra vida cotidiana.
      </p>

      <p>
        El origen de este problema se remonta al momento en que las diferentes
        operadoras de telecomunicaciones comenzaron a desplegar sus redes de
        fibra óptica
        <sup>
          <a href="#2">2</a>
        </sup>{" "}
        en nuestra zona. Sin embargo, cuando los técnicos llegaban a nuestro
        barrio para realizar las instalaciones, se encontraban con una barrera
        técnica insalvable: en nuestra área{" "}
        <strong>
          no existe ninguna CTO{" "}
          <sup>
            <a href="#1">1</a>
          </sup>
        </strong>
        . Esta caja es absolutamente fundamental en cualquier red de fibra, ya
        que es el punto físico donde se conecta la red troncal
        <sup>
          <a href="#6">6</a>
        </sup>{" "}
        de fibra óptica
        <sup>
          <a href="#2">2</a>
        </sup>
        y desde donde se distribuye el servicio a todas las viviendas y
        edificios del barrio. Sin una CTO cercana y accesible, es técnicamente
        imposible proporcionar el servicio de fibra óptica
        <sup>
          <a href="#2">2</a>
        </sup>{" "}
        a los vecinos.
      </p>

      <p>
        La situación geográfica complica aún más el problema. Las CTOs más
        cercanas a nuestro barrio se encuentran ubicadas calle arriba, lo que
        implicaría un tendido de fibra
        <sup>
          <a href="#7">7</a>
        </sup>{" "}
        extremadamente largo y costoso, o al otro lado de la{" "}
        <strong>carretera nacional</strong>. Esta segunda opción es
        completamente inviable, ya que la legislación vigente prohíbe cruzar la
        carretera nacional con infraestructuras
        <sup>
          <a href="#9">9</a>
        </sup>{" "}
        de este tipo por razones de seguridad y normativa vial (Aunque para el
        nuevo edificio si han cruzado la calle y no hubo problemas). Esta
        limitación geográfica nos deja completamente aislados y sin
        posibilidades de conexión a través de las infraestructuras
        <sup>
          <a href="#9">9</a>
        </sup>{" "}
        existentes.
      </p>

      <p>
        Pero el obstáculo más frustrante surge de conflictos entre vecinos.
        Según nos han informado los propios técnicos y fuentes cercanas a las
        operadoras, existe un vecino en la zona que se niega rotundamente a
        permitir que el tendido de fibra óptica
        <sup>
          <a href="#7">7</a>
        </sup>{" "}
        pase por su propiedad. Esta negativa, que se remonta a los momentos
        iniciales de la instalación, ha dejado el rollo de fibra completamente
        atascado calle arriba, sin poder avanzar y sin poder completar la
        conexión hasta nuestro barrio. Esta situación individual se ha
        convertido en un problema colectivo que afecta a cientos de familias. Lo
        curioso es que han rodeado su vivienda por detras pero ahora Movistar
        dice que no le compensa continuar con la instalación.
      </p>

      <p>
        En este escenario de desesperación, <strong>Movistar</strong>, la
        empresa que mantiene el monopolio
        <sup>
          <a href="#5">5</a>
        </sup>{" "}
        de la infraestructura
        <sup>
          <a href="#9">9</a>
        </sup>{" "}
        de telecomunicaciones en nuestra zona, se ha negado sistemáticamente a
        realizar los trabajos necesarios para solucionar el problema. Los
        argumentos de Movistar son puramente económicos: afirman que los costes
        para llevar la fibra hasta nuestro barrio no les compensa
        económicamente. Fuentes internas de la propia empresa nos han llegado a
        comentar que estarían hablando de costes que rondan los{" "}
        <strong>4000 euros</strong>, una cifra ridícula para una empresa que
        tiene tanto poder como Movistar y que hace millones de beneficios
        anuales.
      </p>

      <p>
        Mientras tanto, las otras operadoras de telecomunicaciones como{" "}
        <strong>Vodafone</strong>, <strong>R</strong>, <strong>Digi</strong> u{" "}
        <strong>Orange</strong> se encuentran en una situación de total
        impotencia. Por un lado, no pueden conectar sus servicios a las CTOs de
        Movistar debido a las restricciones impuestas por el monopolio
        <sup>
          <a href="#5">5</a>
        </sup>{" "}
        de la infraestructura
        <sup>
          <a href="#9">9</a>
        </sup>
        . Por otro lado, ninguna de estas empresas está dispuesta a realizar la
        inversión necesaria para desplegar su propia red de fibra
        <sup>
          <a href="#2">2</a>
        </sup>{" "}
        en nuestra zona, siguiendo la misma lógica económica que Movistar: los
        costes de instalación no son rentables para ellos.
      </p>

      <p>
        Como si toda esta situación no fuera suficientemente frustrante, hemos
        descubierto lo que podría considerarse una verdadera burla a los vecinos
        del barrio. Según esta página donde recopila las ayudas del gobierno a
        empresas para desplegar fibra (
        <a
          href="https://programasfibra.es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://programasfibra.es/
        </a>
        ), se puede verificar que en algunos de nuestros edificios más
        afectados, <strong>AVATEL TELECOM S.A.</strong> fue la empresa que ganó
        una importante subvención
        <sup>
          <a href="#8">8</a>
        </sup>{" "}
        dentro del programa{" "}
        <strong>
          <a href="#8">UNICO 2022</a>
        </strong>
        , específicamente el proyecto <strong>TSI-061400-2022-0087</strong>.
        Esta subvención
        <sup>
          <a href="#8">8</a>
        </sup>{" "}
        tenía como objetivo precisamente llevar conectividad de fibra óptica
        <sup>
          <a href="#2">2</a>
        </sup>{" "}
        a zonas como la nuestra, es decir, a áreas con dificultades de conexión
        o sin servicio adecuado.
      </p>

      <p>
        Sin embargo, la realidad es completamente diferente a lo que figuraba en
        el proyecto. Si contactamos con <strong>AVATEL</strong> para solicitar
        el servicio, su respuesta es siempre la misma: nos informan de que{" "}
        <strong>no hay cobertura en nuestra zona</strong>. Lo más indignante
        ocurre cuando mencionamos la subvención específica que recibieron para
        nuestro barrio. En ese momento, o nos cuelgan directamente la llamada o
        simplemente dejan de responder a nuestros correos y mensajes. Esta
        actitud de la empresa demuestra un absoluto desprecio hacia los vecinos
        y hacia las obligaciones que contrajeron al aceptar dicha subvención
        <sup>
          <a href="#8">8</a>
        </sup>{" "}
        pública.
      </p>

      <p>
        El resultado de toda esta concatenación de problemas es que muchos de
        nuestros vecinos, en pleno siglo XXI, se mantiene sin acceso a una
        conexión decente a internet. Esta situación afecta gravemente a{" "}
        <strong>estudiantes</strong> que no pueden acceder a clases online,{" "}
        <strong>teletrabajadores</strong> que no pueden desempeñar sus
        profesiones, <strong>comercios</strong> que pierden oportunidades de
        negocio, y <strong>familias</strong> que ven cómo su derecho fundamental
        a la conectividad se ve vulnerado sistemáticamente por intereses
        económicos, trabas administrativas y el desinterés de las empresas que
        recibieron fondos públicos precisamente para solucionar estos problemas.
      </p>

      <p>
        Ante esta situación desesperada, hemos decidido tomar medidas
        adicionales para defender nuestros derechos. Hemos contactado con el{" "}
        <strong>Ayuntamiento</strong> para verificar si existía algún tipo de
        problema urbanístico que impidiera el despliegue de la fibra óptica
        <sup>
          <a href="#2">2</a>
        </sup>{" "}
        en nuestra zona. Nos han confirmado oficialmente que{" "}
        <strong>no existe ningún impedimento urbanístico</strong> y que todas
        las condiciones técnicas y legales están cumplidas para poder llevar a
        cabo la instalación.
      </p>

      <p>
        Además, hemos presentado una instancia oficial ante el{" "}
        <strong>
          Ministerio para la Transformación Digital y de la Función Pública de
          España
        </strong>{" "}
        (
        <a
          href="https://digital.gob.es/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://digital.gob.es/
        </a>
        ) denunciando la falta de servicio y el incumplimiento de los derechos
        de los usuarios de telecomunicaciones. Según la normativa vigente (
        <a
          href="https://usuariosteleco.digital.gob.es/derechos-usuario"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://usuariosteleco.digital.gob.es/derechos-usuario
        </a>
        ), todos los ciudadanos tenemos derecho a un acceso adecuado a las redes
        y servicios de comunicaciones electrónicas. Sin embargo, las compañías
        se escudan en que al ofrecernos routers por radio
        <sup>
          <a href="#3">3</a>
        </sup>{" "}
        y routers 4G/5G
        <sup>
          <a href="#4">4</a>
        </sup>
        , consideran que ya cumplen con sus obligaciones, lo que les exime de
        tener que desplegar la infraestructura
        <sup>
          <a href="#9">9</a>
        </sup>{" "}
        de fibra óptica
        <sup>
          <a href="#2">2</a>
        </sup>{" "}
        que realmente necesitamos y a la que tenemos derecho.
      </p>
      <p>
        Como último recurso, hemos contactado con diferentes empresas locales
        que ofrecen servicios de fibra óptica en nuestra zona. Una de ellas es{" "}
        <strong>
          <a target="_blank" href="https://www.aureatelecom.com/">
            Aurea Telecom
          </a>
        </strong>
        , quien nos ha confirmado que existe interés por instalar fibra en
        nuestra zona pero que, como las demás operadoras, no puede usar la red
        de Movistar. Está dispuesta a instalar fibra propia para darnos servicio
        a los vecinos afectados.
      </p>
      <p>
        Para cubrir economicamente los gastos de instalación, la empresa va a
        pedir una subvención alegando que es una zona donde hay especial interes
        por la fibra y que las demás compañías no dan servicio. y para solicitar
        esa subvención, necesita los datos del <a href="#form">formulario</a> de
        esta página.
      </p>

      <br />
      <br />
      <br />
      <br />
      <br />
      <Glossary items={glossaryItems} />
    </Section>
  );
}
