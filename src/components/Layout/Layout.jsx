import React from 'react';
import { Suspense} from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Header from '../header/Header';
import style from './Layout.module.scss';

const Layout = () => {
  return (
    <>
      
      <div className={style.container} >
      <Header />
      <Suspense fallback={null}>
        <Outlet />
        </Suspense>
      </div>
    </>
  )
}

export default Layout;
