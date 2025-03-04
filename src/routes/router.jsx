import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Error from "../components/error/Error";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AvailableCars from "../pages/cars/AvailableCars";
import CarsDetails from "../pages/cars/CarsDetails";
import PrivateRoute from "../utilitis/PrivateRoute";
import AddCar from "../form/AddCar";
import MyBooking from "../pages/MyBooking";
import MyCars from "../pages/cars/MyCars";
import Profile from "../pages/Profile";
import AboutUs from "../pages/Company/AboutUs";
import Contact from "../pages/Company/Contact";
import Privacy from "../pages/Company/Privacy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/availableCars",
        element: <AvailableCars></AvailableCars>
      },
      {
        path: "/myBookings",
        element: <PrivateRoute>
          <MyBooking></MyBooking>
        </PrivateRoute>
      },
      {
        path: "/addCar",
        element: <PrivateRoute>
          <AddCar></AddCar>
        </PrivateRoute>
      },
      {
        path: "/myCars",
        element: <PrivateRoute>
          <MyCars></MyCars>
        </PrivateRoute>
      },
      {
        path: "/myProfile",
        element: <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path: "/cars/:id",
        element: <PrivateRoute>
          <CarsDetails></CarsDetails>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://assignment-11-server-one-lemon.vercel.app/cars/${params.id}`)
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>
      },
      {
        path: "/Contact",
        element: <Contact></Contact>
      },
      {
        path: "/Privacy",
        element: <Privacy></Privacy>
      },
      {
        path: "*",
        element: <Error></Error>
      },
    ]
  },
]);

export default router;
