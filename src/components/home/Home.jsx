import React from 'react';
import style from './Home.module.scss';
import imageHome from '../../assets/img/imageHome.jpeg';

const Home = () => {
  return (
    <div className={style.container}>
      <div className={style.containerImg}>
      <img src={imageHome} alt="hand" className={style.img} />
      </div>
      <div className={style.containerText}>
        <h2 className={style.title}>Who We Are</h2>
        <p className={style.text}>At SHADE, we are a young company founded in 2023, specializing in the programming of PLC (Programmable Logic Controllers). Our mission is to provide innovative solutions in the field of industrial automation, helping to optimize production processes and ensure operational efficiency for businesses.</p>
      </div>
    </div>
  )
}

export default Home;

