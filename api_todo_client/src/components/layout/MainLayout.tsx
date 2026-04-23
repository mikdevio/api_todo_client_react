import { Outlet } from "react-router-dom";
import { SidebarInset, SidebarProvider } from "@/components/ui";
import AppSideBar from "@/components/common/AppSideBar";
import AppHeader from "@/components/common/AppHeader";

const MainLayout = () => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSideBar variant="inset" />
      <SidebarInset>
        <AppHeader />
        <div className="flex min-h-screen">
          <div className="flex-1">
            <main className="p-6">
              <Outlet />
            </main>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
export default MainLayout;
