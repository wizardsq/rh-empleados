import React from 'react'
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar'
export const Layout = () => {
    return <div style={{
        padding: '50px 0px 0px 150px'
    }}>
        <Sidebar />
        <Outlet />
    </div>;
}
