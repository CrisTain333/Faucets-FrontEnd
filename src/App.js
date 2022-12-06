import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;