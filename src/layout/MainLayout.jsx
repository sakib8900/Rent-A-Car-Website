import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Banner from "../pages/Banner";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {/* Banner Full Width */}
            <div className="w-full">
                <Banner />
            </div>
            {/* Main Content */}
            <div className="w-[85%] md:w-[90%] mx-auto flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
