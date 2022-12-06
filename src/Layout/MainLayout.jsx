import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
const MainLayout = () => {
    return (
        <>
        <Navbar/>
        <Outlet></Outlet>
            
        </>
    );
};

export default MainLayout;