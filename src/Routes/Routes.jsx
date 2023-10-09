import { createBrowserRouter } from "react-router-dom";
import Registration from "../Components/Registration/Registration";
import Main from "../Layout/Main";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../Pages/Home/Home";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";


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
                path: "/services",
                element: <ServicesPage></ServicesPage>,
                loader: async () => {
                    return fetch("services.json")
                }
            },
            {
                path: "/gallery",
                element: <Gallery></Gallery>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },

        ]
    },
]);


export default router;