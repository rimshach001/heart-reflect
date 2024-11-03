import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import images from '../../assets/images';
import colors from '../../constants/colors';
import { signin } from '../../server/functions'; // Import your API function
import { useNavigate } from 'react-router-dom';

function Signin() {
    // Step 1: Define states for email and password
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // Step 2: Handle form validation and signin
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSignin = async () => {
        let validationErrors = {};

        // Validate fields
        if (!email) {
            validationErrors.email = 'Email is required';
        } else if (!validateEmail(email)) {
            validationErrors.email = 'Invalid email format';
        }
        if (!password) {
            validationErrors.password = 'Password is required';
        }

        if (Object.keys(validationErrors).length === 0) {
            console.log('Signing in with:', { email, password });
            try {
                const result = await signin(email, password);

                localStorage.setItem('user', JSON.stringify(result));
                console.log('Login successful', result);
                localStorage.setItem("user", JSON.stringify(result))

                // Custom event
                const event = new Event("userLoggedIn");
                window.dispatchEvent(event)
                navigate('/'); // Navigate to the homepage or dashboard
            } catch (error) {
                setErrors({ general: 'Invalid Credentials. Please try again.' });
            }
        } else {
            setErrors(validationErrors); // Display validation errors
        }
    };

    return (
        <Box sx={{
            flexGrow: 1, p: 3,
            backgroundImage: `url(${images.signUpBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            display: 'flex',
            justifyContent: 'right',
        }}>
            <Box sx={{ width: '50%' }}>
                <Box
                    sx={{
                        width: { xs: '100%', sm: '400px' },
                        margin: '80px auto',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        backgroundColor: colors.lightBrown,
                        opacity: 0.7
                    }}
                >
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: colors.darkestBrown, textAlign: 'center', marginBottom: '20px' }}>
                        Login
                    </Typography>

                    {/* Email Field */}
                    <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{
                            marginBottom: '15px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: colors.black,
                                },
                                '&:hover fieldset': {
                                    borderColor: colors.brown,
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: colors.darkBrown,
                                },
                            },
                        }}
                    />

                    {/* Password Field */}
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                        sx={{
                            marginBottom: '20px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: colors.black,
                                },
                                '&:hover fieldset': {
                                    borderColor: colors.brown,
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: colors.darkBrown,
                                },
                            },
                        }}
                    />

                    {/* Display general error message if any */}
                    {errors.general && (
                        <Typography sx={{ color: 'red', marginBottom: '10px' }}>
                            {errors.general}
                        </Typography>
                    )}

                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleSignin}
                        sx={{
                            backgroundColor: colors.black,
                            padding: '10px',
                            color: '#fff',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                            '&:hover': {
                                backgroundColor: colors.darkBrown,
                                color: colors.black
                            }
                        }}
                    >
                        Login
                    </Button>

                    {/* Signup Link */}
                    <Typography
                        variant="body2"
                        sx={{ textAlign: 'center', marginTop: '15px', color: colors.darkBrown }}
                    >
                        Create an account? <a href="/signup" style={{ color: colors.darkestBrown }}>Sign up</a>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Signin;
