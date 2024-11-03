import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import images from '../../assets/images';
import colors from '../../constants/colors';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../server/functions';

function Signup() {
    // Step 1: Define states for form fields
    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();


    // Step 2: Handle form validation and signup
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSignup = async () => {
        let validationErrors = {};

        // Validate all fields
        if (!name) {
            validationErrors.name = "Full Name is required";
        }
        if (!email) {
            validationErrors.email = "Email is required";
        } else if (!validateEmail(email)) {
            validationErrors.email = "Invalid email format";
        }
        if (!password) {
            validationErrors.password = "Password is required";
        }
        if (!confirmPassword) {
            validationErrors.confirmPassword = "Confirm Password is required";
        } else if (password !== confirmPassword) {
            validationErrors.confirmPassword = "Passwords do not match";
        }

        // If there are no validation errors, proceed with signup
        if (Object.keys(validationErrors).length === 0) {
            console.log('Signing up with:', { name, email, password });
            try {
                const result = await signup(
                    name,
                    email,
                    password
                );

                console.log(result);
                navigate('/login');
            } catch (e) {
                setErrors(
                    'Invalid Credentials. Try again or Click Forgot Password to reset.',
                );
            }
        } else {
            // Set validation errors to display them in the UI
            setErrors(validationErrors);
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
                        width: { xs: '100%', sm: '500px' },
                        margin: '50px auto',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                        backgroundColor: colors.lightBrown,
                        opacity: 0.7
                    }}
                >
                    {/* Title */}
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: colors.darkestBrown, textAlign: 'center', marginBottom: '20px' }}>
                        Signup
                    </Typography>

                    {/* Name Field */}
                    <TextField
                        label="Full Name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        error={!!errors.name}
                        helperText={errors.name}
                        sx={{
                            marginBottom: '15px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: colors.black },
                                '&:hover fieldset': { borderColor: colors.brown },
                                '&.Mui-focused fieldset': { borderColor: colors.darkBrown },
                            },
                        }}
                    />

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
                                '& fieldset': { borderColor: colors.black },
                                '&:hover fieldset': { borderColor: colors.brown },
                                '&.Mui-focused fieldset': { borderColor: colors.darkBrown },
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
                                '& fieldset': { borderColor: colors.black },
                                '&:hover fieldset': { borderColor: colors.brown },
                                '&.Mui-focused fieldset': { borderColor: colors.darkBrown },
                            },
                        }}
                    />

                    {/* Confirm Password Field */}
                    <TextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword}
                        sx={{
                            marginBottom: '20px',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': { borderColor: colors.black },
                                '&:hover fieldset': { borderColor: colors.brown },
                                '&.Mui-focused fieldset': { borderColor: colors.darkBrown },
                            },
                        }}
                    />

                    {/* Signup Button */}
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleSignup}
                        sx={{
                            backgroundColor: colors.black,
                            padding: '10px',
                            color: '#fff',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            borderRadius: '8px',
                            '&:hover': { backgroundColor: colors.darkBrown, color: colors.black }
                        }}
                    >
                        Signup
                    </Button>

                    {/* Login Link */}
                    <Typography
                        variant="body2"
                        sx={{ textAlign: 'center', marginTop: '15px', color: colors.darkBrown }}
                    >
                        Already have an account? <a href="/signin" style={{ color: colors.darkestBrown }}>Login</a>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Signup;
