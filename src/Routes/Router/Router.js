import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Login from "../../pages/Auth/Login/Login";
import Recover from "../../pages/Auth/Recover/Recover";
import Register from "../../pages/Auth/Register/Register";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import User from "../../pages/User/User";


export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/recover',
                element: <Recover></Recover>
            },
            {
                path: '/user',
                element: <User></User>
            },
            {
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])