import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Sidebar";

const DashboardLayout = () => {
    return (
        <div className="relative min-h-screen md:flex">
            <div>
               <Sidebar></Sidebar>
            </div>
            <div className="flex-1 md:ml-64">
                <div className="">
                <Outlet></Outlet>
                </div>
               
            </div>
            
        </div>
    );
};

export default DashboardLayout;