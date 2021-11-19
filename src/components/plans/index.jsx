import React from 'react';
import styles from '../../styles/Plans.module.css'
import CardInicial from '../../assets/4.png'
import CardX from '../../assets/2.png'
import CardPromo from '../../assets/3.png'

const Plans = () => {
  return (
    <main >
      
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