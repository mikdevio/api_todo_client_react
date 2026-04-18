"use client"

import * as React from 'react';
import { SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, Sidebar } from '@/components/ui';

import { IconAbc, IconAddressBook, IconInnerShadowTop } from "@tabler/icons-react";
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
        },
        {
            title: "Option 2",
            url: "#",
            icon: IconAddressBook
        },

    ],

}


function AppSideBar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible='offcanvas' {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild className='data-[slot=sidebar-menu-button]:p-1.5!'>
                            <a href='#'>
                                <IconInnerShadowTop className='size-5!' />
                                <span className='text-base font-semibold'>API TODO</span>
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