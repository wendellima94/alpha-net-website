import React from 'react';
import styles from '../../styles/Content.module.css'
import Fundo from '../../assets/fundo-alphanet.png'
// import { Container } from './styles';

const Content = () => {
  return (
    <main className={styles.container}>
      <img className={styles.homeImg} src={Fundo} alt='fundo' />
    </main>
  )
}

export default Content;