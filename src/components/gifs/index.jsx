import React from 'react';
import GifCarreira from '../../assets/planoempresa.gif'
import styles from '../../styles/Gif.module.css';
function Gif() {

  return (
    <div className={styles.container}>
      <img className={styles.AnimateGif} src={GifCarreira} alt="loading..." />
    </div>
  )
}

export default Gif;