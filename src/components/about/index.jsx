import React from 'react';
import styles from '../../styles/About.module.css'
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

const About = () => {
  var iconSize = 30

  return (
    <main className={styles.container}>
      <section className={styles.iconsContainer}>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Alpha-Net-Guaruja-104177842095377/?notif_id=1637247908648139&notif_t=page_fan&ref=notif">
          <BsFacebook color='#3b5998' size={iconSize} />
        </a>
        <a style={{width: '50px'}} target="_blank" rel="noreferrer" href="https://www.instagram.com/alphanetguaruja/?fbclid=IwAR1_ud8iXPqbe83yLrxmSYBq265Ho2o6-BZwo7XRTuGclaKuUjw5Tn_deR8">
          <BsInstagram   color='gray' size={iconSize}/>
        </a>
        <a href="http://api.whatsapp.com/send?1=pt_BR&phone=55013997294828" rel="noreferrer" target="_blank">
          <BsWhatsapp  color='#34af23' size={iconSize}/>
        </a>
      </section>

    </main>
  )
}

export default About;