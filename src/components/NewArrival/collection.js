import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import colors from '../../constants/colors';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { allProducts } from '../../server/functions';
import { baseURL } from '../../server/axios';

const Collection = ({ colXS, colMd }) => {
    const [products, setProducts] = useState([]);

    // Fetch products from backend API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await allProducts();
                console.log(data, "response");
                setProducts(data.products || []);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
            console.log(baseURL, "base urrl")
        };

        fetchProducts();
    }, []);


    return (
        <Box sx={{ paddingX: { xs: '10px', md: '20px' }, textAlign: 'center', backgroundColor: colors.lightBrown, paddingY: '50px' }}>
            <Grid container spacing={1} sx={{ marginTop: '24px', margin: 0 }}>
                {products.map((product) => (
                    <Grid item xs={6} sm={colXS} md={colMd} key={product._id}>
                        <Card sx={{ maxWidth: '95%', paddingLeft: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <CardMedia
                                sx={{ height: { xs: '190px', md: "300px" }, width: { xs: '290px', md: "100%" } }}
                                component="img"
                                image={`${baseURL}${product.imageUrl}`} // Update this line
                                alt={product.name}
                            />
                            <CardContent sx={{ paddingY: '5px', width: "100%" }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography gutterBottom variant="h6" component="div" fontWeight={'bold'} sx={{ fontSize: { xs: '0.9rem', md: '1.2rem' }, margin: "0px" }}>
                                        {product.name}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: "flex", flexDirection: 'column', alignItems: 'self-start' }}>
                                    <Typography variant="body2" color="textSecondary"
                                        sx={{ fontSize: { xs: '0.8rem', md: '1.2rem' } }}>
                                        {product.category}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography variant="h5" color="textSecondary" fontWeight={'bold'}
                                        sx={{ fontSize: { xs: '1rem', md: '1.35rem' }, textDecoration: product.discountedPrice ? 'line-through' : 'none' }}>
                                        ${product.price}
                                    </Typography>
                                    {product.discountedPrice && (
                                        <Typography variant="h5" color="primary" fontWeight={'bold'}
                                            sx={{ fontSize: { xs: '1rem', md: '1.35rem' }, marginLeft: '8px' }}>
                                            ${product.discountedPrice}
                                        </Typography>
                                    )}
                                    <ShoppingCart
                                        sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Button variant="contained" sx={{ marginTop: '40px', padding: '10px 30px', color: colors.lightBrown, backgroundColor: colors.text }}>
                View More
            </Button>
        </Box>
    );
};

export default Collection;