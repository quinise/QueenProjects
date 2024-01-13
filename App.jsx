import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './src/pages/login-page.ts';
import './src/pages/user-dashboard.ts';
import './src/pages/user-settings.ts';
import './src/pages/update-links.ts';
import './src/pages/project-dashboard.ts';
import './src/pages/user-settings.ts';
import './src/pages/create-project.ts';
import './src/elements/nav-bar.ts';
import './src/elements/app-footer.ts';
import './src/index.css';

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<login-page />} />
            <Route path="/user-dashboard" element={<user-dashboard />} />
            <Route path="/user-settings" element={<user-settings />} />
            <Route path="/update-links" element={<update-links />} />
            <Route path="/project-dashboard" element={<project-dashboard />} />
            <Route path="/create-project" element={<create-project />} />
        </Routes>
    )
}