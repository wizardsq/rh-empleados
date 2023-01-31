import React, {useState}from 'react'
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar'
export const Layout = () => {
    const [collapsed, setCollapsed] = useState(false)

    return <div style={{
        padding: collapsed ? '50px 0px 0px 130px' : '100px 0px 0px 260px',
        transition: 'padding 0.5s'
    }}>
        
        <Outlet />
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
    </div>;
}
