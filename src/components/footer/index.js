import React from 'react'
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material'
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material'
import colors from '../../constants/colors'

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: colors.darkestBrown,
                p: 6,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.light" gutterBottom>
                            Heart Reflect
                        </Typography>
                        <Typography variant="body2" color="text.light">
                            Our commitment to excellence is evident in every aspect of our business, from the exceptional quality of our materials to the outstanding craftsmanship of our designs.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.light" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="text.light">
                            123 Main Street, Anytown, USA 12345
                        </Typography>
                        <Typography variant="body2" color="text.light">
                            Email: info@example.com
                        </Typography>
                        <Typography variant="body2" color="text.light">
                            Phone: +1 234 567 8901
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.light" gutterBottom>
                            Follow Us
                        </Typography>
                        <IconButton aria-label="Facebook" style={{ color: colors.lightBrown }}>
                            <Facebook />
                        </IconButton>
                        <IconButton aria-label="Twitter" style={{ color: colors.lightBrown }}>
                            <Twitter />
                        </IconButton>
                        <IconButton aria-label="Instagram" style={{ color: colors.lightBrown }}>
                            <Instagram />
                        </IconButton>
                        <IconButton aria-label="LinkedIn" style={{ color: colors.lightBrown }}>
                            <LinkedIn />
                        </IconButton>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.light" align="center">
                        {'Copyright © '}
                        <Link color="inherit" href="https://your-website.com/">
                            Your Website
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}