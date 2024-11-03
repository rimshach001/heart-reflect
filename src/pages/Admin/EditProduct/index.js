import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { updateProduct } from '../../../server/functions'; // Make sure this path is correct

const EditProductForm = ({ product, onUpdate }) => {
    const [formData, setFormData] = useState({
        name: '',
        price: '',
        discountedPrice: '',
        details: '',
        category: '',
    });

    // Use effect to set initial values when product changes
    useEffect(() => {
        setFormData({
            name: product.name,
            price: product.price,
            discountedPrice: product.discountedPrice,
            details: product.details,
            category: product.category,
        });
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const updatedProduct = await updateProduct(product._id, formData);
            onUpdate(updatedProduct); // Callback to update the product in the parent component
            alert('Product updated successfully!');
        } catch (error) {
            alert('Failed to update the product');
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant="h6" gutterBottom>Edit Product</Typography>
            <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
            />
            <TextField
                fullWidth
                label="Price"
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                margin="normal"
            />
            <TextField
                fullWidth
                label="Discounted Price"
                type="number"
                name="discountedPrice"
                value={formData.discountedPrice}
                onChange={handleChange}
                margin="normal"
            />
            <TextField
                fullWidth
                label="Details"
                name="details"
                value={formData.details}
                onChange={handleChange}
                margin="normal"
                multiline
                rows={4}
            />
            <TextField
                fullWidth
                label="Category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                margin="normal"
            />
            <Button type="submit" variant="contained" color="primary">
                Update Product
            </Button>
        </form>
    );
};

export default EditProductForm;
