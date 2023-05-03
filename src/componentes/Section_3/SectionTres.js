import React from "react";
import styles from "./sectionTres.module.css";

const SectionTres = () => {
  return (
    <section className={styles.contenedorSectionTres}>
      <div className={styles.contenedorContenidoUno}>
        <div className={styles.bloqueIzq}>
          <h2>
            ¿Necesitas una oficina de cambio en
            <span className={styles.linea}> Alicante?</span>
          </h2>
          <p>
            <span>
              Actualmente tenemos 2 oficinas de cambio de divisas en Alicante
              para que puedas cambiar divisa fácil y rápido. No cobramos
              comisiones y ofrecemos el mejor tipo de cambio de la ciudad. {""}
            </span>
            Tenemos más de 30 divisas disponibles para ofrecerte el mejor
            servicio.
          </p>
        </div>
        <div className={styles.bloqueDer}>
          <h3>¿Cómo cambiar divisa?</h3>
          <p>
            Acude a tu casa de cambio quickgold en Alicante más cercana,
            indícanos la moneda extranjera que quieres cambiar y recibe el
            dinero en efectivo al instante. Puedes cambiar dólares por euros en
            solo unos minutos.
          </p>
        </div>
      </div>
      <h1>
        Cambiar divisa en <span className={styles.linea}>Alicante</span> es muy
        fácil
      </h1>
      <div className={styles.contenedorInfoTres}>
        <div className={styles.cards}>
          <p>#1</p>
          <p>Indícanos la divisa que quieres cambiar</p>
        </div>
        <div className={styles.cards}>
          <p>#2</p>
          <p>Acordamos precio. ¡Hacemos mejoras por cantidad!</p>
        </div>
        <div className={styles.cards}>
          <p>#3</p>
          <p>Recibe el dinero en efectivo al instante</p>
        </div>
      </div>
    </section>
  );
};

export default SectionTres;
