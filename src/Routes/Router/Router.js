import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";


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
                path: '*',
                element: <Error></Error>
            }
        ]
    }
])