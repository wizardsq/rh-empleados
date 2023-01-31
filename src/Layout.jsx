import React from 'react'
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar'
export const Layout = () => {
    return <div style={{
        padding: '100px 0px 0px 270px'
    }}>
        
        <Outlet />
        <Sidebar />
    </div>;
}
