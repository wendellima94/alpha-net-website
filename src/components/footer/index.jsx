import React from 'react';
import style from '../../styles/Footer.module.css';

import { BsFacebook } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";

export default function Footer() {
  const iconSize = 40

  return (
    <footer className={style.container}>
      Entre em contato conosco por:
      <a href="http://api.whatsapp.com/send?1=pt_BR&phone=55013997294828" rel="noreferrer" target="_blank">
        <AiOutlineWhatsApp color='#34af23' size={iconSize} /><span> Whatsapp</span>
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Alpha-Net-Guaruja-104177842095377/?notif_id=1637247908648139&notif_t=page_fan&ref=notif">
        <BsFacebook color='#3b5998' size={iconSize} /><span> Facebook</span>
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/alphanetguaruja/?fbclid=IwAR1_ud8iXPqbe83yLrxmSYBq265Ho2o6-BZwo7XRTuGclaKuUjw5Tn_deR8">
        <GrInstagram color='gray' size={iconSize} /><span> Instagram </span>
      </a>
    </footer>
  )
}