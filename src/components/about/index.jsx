import React from 'react';
import styles from '../../styles/About.module.css'
import { BsFacebook, BsInstagram, BsTelephoneOutboundFill, BsWhatsapp } from "react-icons/bs";

const About = () => {
  return (
    <main className={styles.container}>
      <section className={styles.iconsContainer}>
        <a target="_blank" href="https://www.facebook.com/Alpha-Net-Guaruja-104177842095377/?notif_id=1637247908648139&notif_t=page_fan&ref=notif">
          <BsFacebook />
        </a>
        <a target="_blank" href="https://www.instagram.com/alphanetguaruja/?fbclid=IwAR1_ud8iXPqbe83yLrxmSYBq265Ho2o6-BZwo7XRTuGclaKuUjw5Tn_deR8">
          <BsInstagram />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <BsTelephoneOutboundFill />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <BsWhatsapp />
        </a>
      </section>

    </main>
  )
}

export default About;