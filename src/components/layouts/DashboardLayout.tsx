import { Outlet } from "react-router-dom"
import Dashboardhead from "../blocks/Dashboardhead"
import Sidebar from "../blocks/Sidebar"
import Footer from "../blocks/Footer"

const DashboardLayout = () => {
  return (
    <div className="w-full h-screen">
        <Dashboardhead />
        <div className="w-screen flex justify-center">
            <div className="flex w-[85%]">
                <Sidebar />
                <Outlet />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default DashboardLayout