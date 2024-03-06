import { Outlet } from "react-router-dom"
import Sidebar from "../blocks/Sidebar"
import Footer from "../blocks/Footer"
import Header from "../blocks/Header"

const DashboardLayout = () => {
  return (
    <div className="w-full h-screen">
        <Header />
        <div className="w-full flex justify-center">
            <div className="flex w-[85%] mt-[15px]">
                <Sidebar />
                <Outlet />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default DashboardLayout