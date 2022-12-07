import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
const MainLayout = () => {
  
    return (
        <>
        <Navbar/>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    );
};

export default MainLayout;