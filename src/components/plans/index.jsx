import React from 'react';
import styles from '../../styles/Plans.module.css'
import CardInicial from '../../assets/6.png'
import CardX from '../../assets/5.png'
import CardPromo from '../../assets/3.png'

const Plans = () => {
  return (
    <main >
      <section className={styles.titleContainer}>
        <h1 className={styles.title}>Promoção de Inauguração</h1>
      </section>
      <div className={styles.container}>
        <section className={styles.cardImg} >
          <img src={CardPromo} alt="plano inicial" />
        </section>
        <section className={styles.cardImg} >
          <img src={CardInicial} alt="plano promocional" />
        </section>
        <section className={styles.cardImg} >
          <img src={CardX} alt="card plano deletado" />
        </section>
      </div>
    </main>
  )
}

export default Plans;