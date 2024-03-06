import React from 'react';
import { Routes, Route } from "react-router-dom";

import './src/components/nav-bar.ts';
import './src/components/app-footer.ts';
import './src/pages/login-page.ts';
import './src/pages/user-dashboard.ts';
import './src/pages/user-settings.ts';
import './src/pages/update-links.ts';
import './src/pages/project-dashboard.ts';
import './src/pages/user-settings.ts';
 

import './src/index.css';

export default function App() {
    return(
        <Routes>
            <Route path="/" element={<login-page />} exact/>
            <Route path="/user-dashboard" element={<user-dashboard />} />
            <Route path="/user-settings" element={<user-settings />} />
            <Route path="/update-links" element={<update-links />} />
            <Route path="/projects/:projectId" element={<project-dashboard />} />
        </Routes>
    )
}