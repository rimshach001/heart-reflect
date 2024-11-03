import React from 'react'
import Collection from '../../components/NewArrival/collection'
import { Box, Typography } from '@mui/material'
import colors from '../../constants/colors'
import { useLocation } from 'react-router-dom';

function Jewellery() {
    const location = useLocation();
    const { heading, description } = location.state || { heading: 'Default Heading', description: 'Default Description' };

    return (
        <Box pt={5} sx={{ textAlign: 'center', backgroundColor: colors.lightBrown }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '16px', color: colors.text }}>
                {heading}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Typography variant="body1" color='#9E847D' sx={{ marginBottom: '24px', color: colors.textLight, width: { sx: '90%', md: '60%' } }}>
                    {description}
                </Typography>
            </Box>
            <Collection colXS='4' colMd='3' />
        </Box>

    )
}

export default Jewellery