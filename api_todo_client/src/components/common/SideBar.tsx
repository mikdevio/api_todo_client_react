"use client"

import { Sidebar } from 'lucide-react';
import * as React from 'react';
import { SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui';

import { IconInnerShadowTop } from "@tabler/icons-react";

interface SideBarProps {
    sidebar_title: string
}

const AppSideBar: React.FC<SideBarProps> = ({ sidebar_title }) => {
    return (
        <Sidebar>
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
                <SidebarGroup>
                    Asde
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}

export default AppSideBar;