"use client"

import { Sidebar } from 'lucide-react';
import * as React from 'react';
import { SidebarContent, SidebarGroup, SidebarHeader } from '../ui';


interface SideBarProps {
    prop: string
}

const SideBar: React.FC<SideBarProps> = ({ prop }) => {
    return (
        <>
            <Sidebar>
                <SidebarHeader />
                <SidebarContent>
                    <SidebarGroup>

                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </>
    )
}

export default SideBar;