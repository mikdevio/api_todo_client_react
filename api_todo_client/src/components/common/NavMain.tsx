import React from "react";


import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui";
import { IconCirclePlusFilled } from "@tabler/icons-react";
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
                        < SidebarMenuButton>
                            <IconCirclePlusFilled className="size-5!" />
                            <span>Quick create</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
                <SidebarMenu>
                    {items.map(item => (
                        <SidebarMenuItem key={item.title} className="flex items-center gap-2">
                            <SidebarMenuButton>
                                {item.icon && <item.icon className="size-5!" />}
                                <span>{item.title}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}

export default NavMain;