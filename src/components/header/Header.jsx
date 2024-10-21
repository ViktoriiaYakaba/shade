import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; 
import style from './Header.module.scss';
import iconShade from '../../assets/img/shade-transparent.png';
import video from '../../assets/video/shade-video.mp4';
import clsx from 'clsx';

const Header = () => {
  const location = useLocation(); 
  const isHome = location.pathname === "/"; 

  return (
    <div className={clsx(style.container, { [style.white]: isHome })}>
      <div className={style.containerNav}>
          <NavLink to="/" className={style.containerLogo}>
            <img src={iconShade} alt="SHADE" className={style.img} />
          </NavLink>
    
          <nav className={style.navList}>
            <ul className={style.list}>
              <li className={style.listItem}>
                <NavLink 
                  to='/home'
                  className={({ isActive }) => clsx(isActive && style.active)}
                >
                  Home
                </NavLink>
              </li>
              <li className={style.listItem}>
                <NavLink 
                  to='/about'
                  className={({ isActive }) => clsx(isActive && style.active)}
                >
                  About
                </NavLink>
              </li>
              <li className={style.listItem}>
                <NavLink 
                  to='/contact'
                  className={({ isActive }) => clsx(isActive && style.active)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
      </div>
      {isHome && (
        <div className={style.containerVideo}>
          <video autoPlay muted loop playsInline className={style.video}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className={style.overlay}></div>
         <div className={style.containerText}>
              <h1 className={style.heading}>Tailored Automation: PLC Programming for Industrial Plants and Robotics</h1>
              <NavLink to="/about" className={style.buttonAbout}>About Us</NavLink>
         </div>
        </div>
      )}
    </div>
  );
}

export default Header;
