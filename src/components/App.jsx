import React, {lazy} from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const ContactPage = lazy(() => import('../pages/ContactPage'));
const AboutPage = lazy(() => import('../pages/AboutPage'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='home' element={<HomePage />} />
            <Route path='contact' element={<ContactPage />} />
            <Route path='about' element={<AboutPage/>} />
            </Route>
      </Routes> 
    </>
  )
}

export default App;
