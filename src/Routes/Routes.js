import { createBrowserRouter  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Login/Singup";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/login',
                element: <Login/>

            },
            {
               path:'/signup',
               element: <Singup/>     
            }
        ]
    }
])
