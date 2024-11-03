import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';
import images from '../../assets/images';
import colors from '../../constants/colors'

const JewelrySection = () => {
    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', backgroundColor: colors.darkBrown, padding: '20px' }}>
            <Grid container spacing={2}>
                {/* Left Side - Image with Labels */}
                <Grid item xs={12} md={6} sx={{ position: 'relative', clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)' }}>
                    <img
                        src={images.necklace4}
                        alt="Jewelry"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }}
                    />
                </Grid>

                {/* Right Side - Product Details */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px', color: colors.brown }}>
                        Elegant Diamond Necklace
                    </Typography>

                    <Typography variant="body1" sx={{ marginBottom: '10px', color: colors.textLight }}>
                        Women's Collection
                    </Typography>

                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px', color: colors.brown }}>
                        $150.00
                    </Typography>

                    <Typography variant="body2" sx={{ marginBottom: '20px', color: colors.textLight, width: { sx: '100%', md: '80%' } }}>
                        Discover our stunning new arrivals in jewelry, featuring timeless designs crafted with precision and elegance.
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{ backgroundColor: colors.brown, padding: '10px 50px', borderRadius: '10px', width: 'fit-content', color: colors.darkBrown, textTransform: 'none', }}
                    >
                        <Typography sx={{ fontWeight: 'bold' }}>Buy Now</Typography>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default JewelrySection;
