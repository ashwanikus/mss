'use client';

import AuthRedirect from "../../utility/AuthRedirect";

const  Dashboard = () => {

    return (
        <>
            <h1>Dashboard</h1>
        </>
    );
}

export  default  AuthRedirect(Dashboard, "/admin/dashboard");