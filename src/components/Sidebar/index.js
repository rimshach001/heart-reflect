// src/components/Sidebar.js
import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <Box
            sx={{
                width: 250,
                backgroundColor: '#f5f5f5',
                height: '100vh',
                padding: '20px',
                boxShadow: '2px 0 5px rgba(0,0,0,0.1)',
            }}
        >
            <List>
                <ListItem button component={Link} to="/dashboard/addProduct">
                    <ListItemText primary="Add Product" />
                </ListItem>
                <ListItem button component={Link} to="/dashboard/listProducts">
                    <ListItemText primary="List Products" />
                </ListItem>
            </List>
        </Box>
    );
};

export default Sidebar;
