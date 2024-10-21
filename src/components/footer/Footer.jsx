import React from 'react';
import style from './Footer.module.scss';
import imgLogo from '../../assets/img/shade-transparent.png';

const Footer = () => {
  return (
    <div className={style.container}>
      <img src={imgLogo} alt="SHADE" className={style.img} />
      <div className={style.contactInfo}>
        <h2>Contact Us</h2>
        <p>
          Address: <a href="https://www.google.com/maps/search/?api=1&query=Via+Pantanelle,+7/C,+03030+Piedimonte+San+Germano+(FR)" target="_blank" rel="noopener noreferrer">Via Pantanelle, 7/C, 03030 – Piedimonte San Germano (FR)</a>
        </p>
        <p>
          Phone: <a href="tel:+393421450911">+39 3421450911</a><br />
          Landline: <a href="tel:+390776342648">0776-342648</a>
        </p>
        <p>
          Email: <a href="mailto:mirkoasarsi@gmail.com">mirkoasarsi@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
