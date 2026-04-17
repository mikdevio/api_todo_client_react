import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../ui";
import AppSideBar from "../common/SideBar";

const MainLayout = () => {
    return (
        <SidebarProvider>
            <AppSideBar sidebar_title="API-TODO" />
            <div className='flex min-h-screen'>
                <div className="flex-1">
                    <main className="p-6">
                        <Outlet />
                    </main>
                </div>
            </div>
        </SidebarProvider>
    )
}
export default MainLayout;