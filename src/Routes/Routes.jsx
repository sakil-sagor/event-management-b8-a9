import { createBrowserRouter } from "react-router-dom";
import Registration from "../Components/Registration/Registration";
import ServiceDetails from "../Components/Services/ServiceDetails";
import Main from "../Layout/Main";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../Pages/Home/Home";
import PrivateRoute from "./PrivateRoute";


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
                path: "/services/:id",
                element: <PrivateRoute> <ServiceDetails></ServiceDetails></PrivateRoute>,
                // element: <ServiceDetails></ServiceDetails>,
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