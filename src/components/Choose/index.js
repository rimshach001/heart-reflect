import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import ItemsList from '../ItemsList'
import colors from '../../constants/colors'

const ChooseItem = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, backgroundColor: colors.brown }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', pl: { xs: 3, md: 7 } }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px', color: colors.darkBrown }}>
                        Elegant Collection
                    </Typography>


                    <Typography variant="body2" sx={{ marginBottom: '20px', color: colors.darkBrown, width: { xs: '100%', md: '80%' } }}>
                        Discover our stunning new arrivals in jewelry, featuring timeless designs crafted with precision and elegance.
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{ backgroundColor: colors.darkBrown, padding: '10px 50px', borderRadius: '10px', width: 'fit-content', color: colors.brown, textTransform: 'none', }}
                    >
                        <Typography sx={{ fontWeight: 'bold' }}>Shop Now</Typography>
                    </Button>
                </Grid>

                <Grid item xs={12} md={8}>
                    <ItemsList />
                </Grid>
            </Grid>
        </Box>
    )
}

export default ChooseItem
