import React from "react";


import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui";
import { IconCirclePlusFilled, type Icon, type IconNode } from "@tabler/icons-react";
import type { NavMainItem } from "@/types";




interface NavMainProps {
    items: NavMainItem[],
}


const NavMain: React.FC<NavMainProps> = ({ items }) => {
    return (
        <SidebarGroup>
            <SidebarGroupContent className="flex flex-col gap-2">
                <SidebarMenu>
                    <SidebarMenuItem className="flex items-center gap-2">
                        < SidebarMenuButton className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground">
                            <IconCirclePlusFilled />
                            <span>Quic create</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}

export default NavMain;