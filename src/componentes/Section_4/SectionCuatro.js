import React from "react";
//import Image from "next/image";
import styles from "./sectionCuatro.module.css";

const SectionCuatro = () => {
  return (
    <section className={styles.contenedorSectionCuatro}>
      <div className={styles.bloqueIzq}>
        <h2>
          Cambia moneda extranjera en {""}
          <span className={styles.linea}>Alicante</span>
        </h2>
        <p>
          Si estás en Alicante y necesitas cambiar moneda extranjera, no te
          preocupes: siempre hay una casa de cambio Quickgold cerca de ti. Con
          más de 30 divisas disponibles, podrás cambiar cualquier divisa por
          euros para tus viajes o transacciones internacionales. Además, en
          nuestras oficinas Money Exchange en Alicante ofrecemos el mejor tipo
          de cambio de divisas de toda la ciudad. No te preocupes por el cambio
          de moneda en Alicante, ¡siempre hay una casa de cambio cerca de ti!
        </p>
      </div>
      <div className={styles.bloqueDer}>
        <img
          loading="lazy"
          src="/casa-cambio-alicante.webp"
          alt="Cambiar Dólares a Euros alicante"
          className={styles.Image}
          width={480}
          height={390}
        />
      </div>
    </section>
  );
};

export default SectionCuatro;
