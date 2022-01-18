import React from 'react';
import style from '../../styles/Footer.module.css';
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";

export default function Footer() {
  const iconSize = 40

  return (
    <footer className={style.container}>
      Entre em contato conosco por: 
      <a href="http://api.whatsapp.com/send?1=pt_BR&phone=55013997294828" rel="noreferrer" target="_blank">
        <span>Whatsapp </span><BsWhatsapp color='green' size={iconSize} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Alpha-Net-Guaruja-104177842095377/?notif_id=1637247908648139&notif_t=page_fan&ref=notif">
        <span>Facebook </span><BsFacebook color='blue' size={iconSize} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/alphanetguaruja/?fbclid=IwAR1_ud8iXPqbe83yLrxmSYBq265Ho2o6-BZwo7XRTuGclaKuUjw5Tn_deR8">
        <span>Instagram </span><BsInstagram color='gray' size={iconSize} />
      </a>
    </footer>
  )
}