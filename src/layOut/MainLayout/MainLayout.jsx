import {  Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;