// src/pages/Dashboard.js
import React from 'react';
import { Box, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar'; // Import the Sidebar component

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar /> {/* Render the Sidebar */}
            <Box sx={{ flexGrow: 1, padding: '20px' }}>
                <Typography variant="h4" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
                    Admin Dashboard
                </Typography>
                <Outlet /> {/* This Outlet renders the child routes */}
            </Box>
        </Box>
    );
};

export default Dashboard;
