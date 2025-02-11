import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className={`flex-grow ${location.pathname === "/" ? "w-full" : "w-[90%] md:w-[95%] mx-auto"}`}>
                <Outlet />
            </div>
            {location.pathname !== "/login" && <Footer />}
        </div>
    );
};

export default MainLayout;
