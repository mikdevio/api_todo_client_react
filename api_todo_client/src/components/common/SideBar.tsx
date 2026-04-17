"use client"

import * as React from 'react';
import { SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, Sidebar } from '@/components/ui';

import { IconAbc, IconInnerShadowTop } from "@tabler/icons-react";
import NavMain from './NavMain';

interface SideBarProps {
    sidebar_title: string
}

const data = {
    nav_main_items: [
        {
            title: "Option 1",
            url: "#",
            icon: IconAbc
        }
    ],

}


const AppSideBar: React.FC<SideBarProps> = ({ sidebar_title }) => {
    return (
        <Sidebar collapsible='offcanvas'>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className='data-[slot=sidebar-menu-button]:p-1.5!'>
                            <a href='#'>
                                <IconInnerShadowTop className='size-5!' />
                                <span className='text-base font-semibold'>{sidebar_title}</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.nav_main_items}></NavMain>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSideBar;