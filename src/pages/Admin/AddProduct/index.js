import React, { useState } from 'react';
import { Box, Button, TextField, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { addProducts } from '../../../server/functions';

function AdminProduct() {
    const [productData, setProductData] = useState({
        name: '',
        price: '',
        discountedPrice: '',
        details: '',
        category: '', // This will hold the selected category
        productId: '',
    });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', productData.name);
        formData.append('price', productData.price);
        formData.append('discountedPrice', productData.discountedPrice);
        formData.append('details', productData.details);
        formData.append('category', productData.category); // Append category to formData
        formData.append('productId', productData.productId);
        formData.append('image', image);

        try {
            const response = await addProducts(formData);

            if (response) {
                console.log('Product added successfully!');
            } else {
                console.log('Failed to add product.');
            }
        } catch (error) {
            console.error('Error adding product:', error);
            alert('An error occurred while adding the product.');
        }
    };

    return (
        <Box sx={{
            width: { xs: '100%', sm: '600px' },
            margin: '20px auto',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#f9f9f9',
        }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                Add Product
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    label="Product Name"
                    name="name"
                    variant="outlined"
                    fullWidth
                    required
                    value={productData.name}
                    onChange={handleChange}
                    sx={{ marginBottom: '15px' }}
                />

                <TextField
                    label="Price"
                    name="price"
                    type="number"
                    variant="outlined"
                    fullWidth
                    required
                    value={productData.price}
                    onChange={handleChange}
                    sx={{ marginBottom: '15px' }}
                />

                <TextField
                    label="Discounted Price"
                    name="discountedPrice"
                    type="number"
                    variant="outlined"
                    fullWidth
                    required
                    value={productData.discountedPrice}
                    onChange={handleChange}
                    sx={{ marginBottom: '15px' }}
                />

                <TextField
                    label="Product Details"
                    name="details"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    required
                    value={productData.details}
                    onChange={handleChange}
                    sx={{ marginBottom: '15px' }}
                />

                <FormControl fullWidth sx={{ marginBottom: '15px' }} required>
                    <InputLabel>Product Category</InputLabel>
                    <Select
                        name="category"
                        value={productData.category}
                        onChange={handleChange}
                        label="Product Category"
                    >
                        <MenuItem value="rings">Rings</MenuItem>
                        <MenuItem value="earrings">Earrings</MenuItem>
                        <MenuItem value="necklaces">Necklaces</MenuItem>
                        <MenuItem value="bracelets">Bracelets</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    label="Product ID"
                    name="productId"
                    variant="outlined"
                    fullWidth
                    required
                    value={productData.productId}
                    onChange={handleChange}
                    sx={{ marginBottom: '15px' }}
                />

                <Typography variant="body1" sx={{ marginBottom: '10px' }}>
                    Upload Image:
                </Typography>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required
                    style={{ marginBottom: '15px' }} // Use style instead of sx for native input
                />

                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                        padding: '10px',
                        backgroundColor: '#1976d2',
                        color: '#fff',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&:hover': {
                            backgroundColor: '#115293',
                        },
                    }}
                >
                    Add Product
                </Button>
            </form>
        </Box>
    );
}

export default AdminProduct;
