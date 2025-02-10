import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {/* Home Page এর জন্য Full Width, অন্য রাউটের জন্য নির্দিষ্ট Width */}
            <div className={`flex-grow ${location.pathname === "/" ? "w-full" : "w-[85%] md:w-[90%] mx-auto"}`}>
                <Outlet />
            </div>
            {/* Login Page বাদে সব জায়গায় Footer দেখাবে */}
            {location.pathname !== "/login" && <Footer />}
        </div>
    );
};

export default MainLayout;
