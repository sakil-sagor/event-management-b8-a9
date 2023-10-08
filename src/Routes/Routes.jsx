import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErroPage></ErroPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },



            {
                path: "/gallery",
                element: <ErroPage></ErroPage>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },

        ]
    },
]);


export default router;