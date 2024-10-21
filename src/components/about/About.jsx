import React from 'react';
import style from './About.module.scss';
import imageAbout from '../../assets/img/imageHome.jpeg'; 
import imgRobo from '../../assets/img/imageAbout.jpg';

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.containerImg}>
              <img src={imageAbout} alt="Industrial Automation" className={style.img} />
             <div className={style.overlay}></div> 
      </div>
      <div className={style.containerText}>
       <div className={style.containerTextItem}>
            <h2 className={style.title}>Who We Are</h2>
            <p className={style.text}>
              At SHADE, we are a young company founded in 2023, specializing in the programming of PLC (Programmable Logic Controllers). Our mission is to provide innovative solutions in the field of industrial automation, helping to optimize production processes and ensure operational efficiency for businesses.
                  </p>
       </div>
              <div className={style.containerImgText}>
                  <img src={imgRobo} alt="robo" className={style.imgText } />
              </div>
      </div>
    </div>
  );
};

export default About;
