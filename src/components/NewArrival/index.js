import React from 'react';
import { Box, Typography, Tabs, Tab, } from '@mui/material';
import colors from '../../constants/colors';
import Collection from './collection';

const NewArrival = () => {
    const [tabValue, setTabValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
    };

    return (
        <Box sx={{ padding: { xs: '10px', md: '40px' }, textAlign: 'center', backgroundColor: colors.lightBrown }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '16px', color: colors.text }}>
                New Arrivals
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="body1" color='#9E847D' sx={{ marginBottom: '24px', color: colors.textLight, width: { sx: '90%', md: '70%' } }}>
                    Discover our stunning new arrivals in jewelry, featuring timeless designs crafted with precision and elegance. From radiant necklaces to dazzling earrings, elevate your style with our must-have pieces for every occasion.
                </Typography>
            </Box>

            <Tabs value={tabValue} onChange={handleChange} color={colors.text} centered TabIndicatorProps={{ sx: { backgroundColor: colors.darkBrown, height: 4 } }} >
                <Tab label="Women's Fashion" />
                <Tab label="Women's Jewellery" />
                <Tab label="Women Accessories" />
                <Tab label="Men Accessories" />
                <Tab label="Discount Deals" />
            </Tabs>

            <Collection colXS='6' colMd='4' />
        </Box>
    );
};

export default NewArrival;
