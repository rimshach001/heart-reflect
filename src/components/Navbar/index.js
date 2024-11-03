import React, { useEffect, useState } from 'react';
import { Box, Button, Drawer, IconButton, Popover, Typography, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import colors from '../../constants/colors';
import { useNavigate } from 'react-router-dom';
import { searchProducts } from '../../server/functions';

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [query, setQuery] = useState('');
    const [favorites, setFavorites] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const loadUserFromLocalStorage = () => {
            const auth = localStorage.getItem("user");
            if (auth) {
                const parsedAuth = JSON.parse(auth);
                setUser(parsedAuth);
            }
        };

        loadUserFromLocalStorage();
        window.addEventListener("userLoggedIn", loadUserFromLocalStorage);

        return () => {
            window.removeEventListener("userLoggedIn", loadUserFromLocalStorage);
        };
    }, []);

    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsDrawerOpen(open);
    };

    const handlePersonClick = () => {
        navigate('/login');
    };

    const handleLogout = () => {
        localStorage.clear();
        setUser(null);
        navigate('/login');
    };

    const [anchorEl, setAnchorEl] = useState(null);

    const handleUserClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSearch = async () => {
        try {
            const data = await searchProducts(query);
            console.log('Search results:', data);
            // Handle the search results here (e.g., update state to display results)
        } catch (error) {
            console.error('Error while searching:', error);
        }
    };

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
    };

    const handleFavoritesClick = () => {
        navigate('/favorites', { state: { favorites } });
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const handleNavigation = (path, heading, description) => {
        navigate(path, { state: { heading, description } });
    };

    const menuItems = (
        <Box width={"100%"} height={"100%"} role="presentation">
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, padding: 2 }}>
                <Button color="inherit" href="/">Home</Button>
                <Button color="inherit" onClick={() => handleNavigation('/jewellery', 'Jewellery Collection', 'Discover our stunning new arrivals in jewelry.')}>Jewellery</Button>
                <Button color="inherit" onClick={() => handleNavigation('/engagement-rings', 'Engagement Rings', 'Find the perfect ring for your special moment.')}>Engagement Rings</Button>
                <Button color="inherit" href="/">Necklaces</Button>
                <Button color="inherit" href="/">Earings</Button>
                <Button color="inherit" href="/">Services</Button>
                <Button color="inherit" href="/">Blogs</Button>
            </Box>
        </Box>
    );

    return (
        <nav className="shadow-lg" style={{ backgroundColor: colors.darkBrown, color: colors.whiteText }}>
            <div className="mx-auto px-4">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex lg:hidden" color='white'>
                        <IconButton onClick={toggleDrawer(true)} className="text-white">
                            <MenuIcon />
                        </IconButton>
                    </div>

                    <div className="flex-shrink-0">
                        <a href="/" className="text-lg font-bold">Heart Reflect</a>
                    </div>

                    <div className="flex lg:hidden gap-4">
                        <FavoriteBorderIcon onClick={handleFavoritesClick} />
                        <ShoppingCartIcon />
                    </div>

                    <div className="hidden lg:flex items-center space-x-4">
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                            <Button color="inherit" onClick={() => handleNavigation('/jewellery', 'Jewellery Collection', 'Discover our stunning new arrivals in jewelry.')}>Jewellery</Button>
                            <Button color="inherit" onClick={() => handleNavigation('/engagement-rings', 'Engagement Rings', 'Find the perfect ring for your special moment.')}>Engagement Rings</Button>
                            <Button color="inherit" href="/">Necklaces</Button>
                            <Button color="inherit" href="/">Earings</Button>
                            <Button color="inherit" href="/">Services</Button>
                            <Button color="inherit" href="/">Blogs</Button>
                        </Box>
                    </div>

                    <div className="hidden lg:flex items-center space-x-4">
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <InputBase
                                placeholder="Search..."
                                value={query}
                                onChange={handleSearchChange}
                                sx={{ color: colors.whiteText, backgroundColor: colors.lightBrown, borderRadius: 1, paddingLeft: 1 }}
                            />
                            <IconButton onClick={handleSearch} color="inherit">
                                <SearchIcon />
                            </IconButton>

                            {user ? (
                                <>
                                    <Typography
                                        variant="body1"
                                        component="div"
                                        color={colors.whiteText}
                                        onClick={handleUserClick}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {user.name}
                                    </Typography>
                                    <Popover
                                        id={id}
                                        open={open}
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <Button onClick={handleLogout} color="primary" variant="contained">
                                            Logout
                                        </Button>
                                    </Popover>
                                </>
                            ) : (
                                <IconButton color="inherit" onClick={handlePersonClick}><PersonIcon /></IconButton>
                            )}
                            <FavoriteBorderIcon onClick={handleFavoritesClick} />
                            <ShoppingCartIcon />
                        </Box>
                    </div>
                </div>
            </div>

            <Drawer anchor="left" sx={{ '& .MuiDrawer-paper': { width: '70%', backgroundColor: colors.darkBrown, color: colors.whiteText } }} open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {menuItems}
            </Drawer>
        </nav>
    );
};

export default Navbar;
