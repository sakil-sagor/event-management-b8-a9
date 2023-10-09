import { createBrowserRouter } from "react-router-dom";
import Registration from "../Components/Registration/Registration";
import ServiceDetails from "../Components/Services/ServiceDetails";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../Pages/Home/Home";
import ServicesPage from "../Pages/ServicesPage/ServicesPage";
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
                path: "/services",
                element: <ServicesPage></ServicesPage>,
            },
            {
                path: "services/:id",
                element: <PrivateRoute> <ServiceDetails></ServiceDetails></PrivateRoute>,

                loader: async () => {
                    return fetch("services.json")
                }
            },
            {
                path: "/gallery",
                element: <PrivateRoute> <Gallery></Gallery></PrivateRoute>,
                loader: async () => {
                    return fetch("services.json")
                }
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/booking",
                element: <PrivateRoute> <Appointment></Appointment></PrivateRoute>
            },
            {
                path: "/registration",
                element: <Registration></Registration>
            },

        ]
    },
]);


export default router;