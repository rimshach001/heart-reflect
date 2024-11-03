import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import images from '../../assets/images';
import colors from '../../constants/colors'

const HeroBanner = () => {
    return (
        <Box sx={{
            flexGrow: 1, p: 3,
            backgroundImage: `url(${images.bgbrown})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <Grid container spacing={3} justifyContent="center" alignItems="center" >

                {/* Left Image */}
                <Grid item xs={12} md={4}>
                    <Box
                        component="img"
                        src={images.necklace2} // Replace with actual image URL
                        alt="Left Image"
                        sx={{ width: '100%', height: 'auto' }}
                    />
                </Grid>

                {/* Middle Section with Text and Button */}
                <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                    <Box
                        component="img"
                        src={images.necklace1}
                        alt="Top Small Image"
                        sx={{ width: '100%', height: '30%', mb: 1 }}
                    />
                    <Box sx={{ height: '40%' }}>
                        <Typography variant="h4" component="div" fontWeight="bold" color={colors.text}>
                            ULTIMATE
                        </Typography>
                        <Typography variant="h1" component="div" fontWeight="bold" sx={{ mb: 1 }} color={colors.text}>
                            SALE
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ backgroundColor: colors.text, padding: '10px 20px', borderRadius: '25px', mb: 2 }}
                        >
                            Shop Now
                        </Button>
                    </Box>
                    <Box
                        component="img"
                        src={images.ring5}
                        alt="Bottom Small Image"
                        sx={{ width: '100%', height: '80%' }}
                    />
                </Grid>

                {/* Right Image */}
                <Grid item xs={12} md={4} >
                    <Box
                        component="img"
                        src={images.necklace3} // Replace with actual image URL
                        alt="Right Image"
                        sx={{ width: '100%', height: 'auto' }}
                    />
                </Grid>
            </Grid>


        </Box >
    );
};

export default HeroBanner;
