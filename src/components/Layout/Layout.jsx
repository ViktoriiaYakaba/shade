import React from 'react';
import { Suspense, useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

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
