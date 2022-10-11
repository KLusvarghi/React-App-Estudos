import React from 'react';
import styles from './Contato.module.css';
import photo from '../img/contato.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <>
      <Head title="Contato" description="Página de contato" />
      <section className={`${styles.contato} animeLeft`}> {/* Maneira de se adicionar mais de uma classe em uma tag */}
        <img src={photo} alt="Máquina de escrever" />
        <div>
          <h1>Entre em Contato</h1>
          <ul className={styles.dados}>
            <li>contato@gmail.com</li>
            <li>+55 (13)99606-8207</li>
            <li>Av. Ana Costas, 33</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contato;
