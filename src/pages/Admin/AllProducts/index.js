import React, { useEffect, useState } from 'react';
import {
    Box, Typography, Table, TableBody, TableCell,
    TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle
} from '@mui/material';
import { allProducts, deleteProduct } from '../../../server/functions';
import { baseURL } from '../../../server/axios';
import EditProductForm from '../EditProduct';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import colors from '../../../constants/colors';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await allProducts();
                console.log(data, "response");
                setProducts(data.products || []);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleEditClick = (product) => {
        setSelectedProduct(product);
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
        setSelectedProduct(null); // Clear selected product when closing
    };

    const handleUpdate = (updatedProduct) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) =>
                product._id === updatedProduct._id ? updatedProduct : product
            )
        );
        setSelectedProduct(null);
    };
    const handleDelete = async (productId) => {
        console.log(baseURL + `/${productId}`, "dellllll")
        try {
            await deleteProduct(productId);
            setProducts(products.filter((product) => product._id !== productId));
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };



    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
                All Products
            </Typography>
            <Box sx={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '20px' }}>
                    Product Collection
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="product table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Discounted Price</TableCell>
                                <TableCell>Details</TableCell>
                                <TableCell>Product ID</TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product._id}>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>${product.price}</TableCell>
                                    <TableCell>
                                        {product.discountedPrice ? `$${product.discountedPrice}` : 'N/A'}
                                    </TableCell>
                                    <TableCell>{product.details}</TableCell>
                                    <TableCell>{product.productId}</TableCell>
                                    <TableCell>
                                        <img
                                            src={`${baseURL}${product.imageUrl}`}
                                            alt={product.name}
                                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                        />
                                    </TableCell>
                                    <TableCell>{product.category}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            onClick={() => handleEditClick(product)}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: colors.darkBrown,
                                                backgroundColor: colors.whiteText,
                                                minWidth: '40px',
                                                padding: '5px',
                                                boxShadow: 'none'
                                            }}
                                            startIcon={<EditIcon />}
                                        />
                                        <Button
                                            variant="contained"
                                            onClick={() => handleDelete(product._id)}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: colors.darkBrown,
                                                backgroundColor: colors.whiteText,
                                                minWidth: '40px', // Adjust to your preferred size
                                                padding: '5px',
                                                boxShadow: 'none'
                                            }}
                                            startIcon={<DeleteIcon />}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Dialog open={openModal} onClose={handleModalClose}>
                <DialogTitle>Edit Product</DialogTitle>
                <DialogContent>
                    {selectedProduct && (
                        <EditProductForm
                            product={selectedProduct}
                            onUpdate={handleUpdate}
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleModalClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AllProducts;
