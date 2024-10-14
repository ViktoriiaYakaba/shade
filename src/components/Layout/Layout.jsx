import React from 'react';
import { Suspense} from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../header/Header';

const Layout = () => {
  return (
    <>
      
      <div >
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      </div>
    </>
  )
}

export default Layout
