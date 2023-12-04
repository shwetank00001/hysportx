import React from "react";
import ShortcutHub from "pages/Admin/ShortcutHub";
import { Route, Routes } from "react-router-dom";

const Admin = () => {
    const isAdmin = 'admin';
    if (!isAdmin) {
        return <Navigate to="/" />;
    }
    
    return (
        <>
            <Routes>
                <Route path="admin/shortcut-hub" Component={ShortcutHub}></Route>
            </Routes>
        </>
    );
}

export default Admin;