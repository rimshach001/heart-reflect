import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Avatar, IconButton, Container } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import colors from '../../constants/colors';
import images from '../../assets/images';
import Divider from '@mui/material/Divider';

const testimonials = [
    {
        id: 1,
        name: "James K.",
        role: "Traveler",
        text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
        avatar: images.person1,
    },
    {
        id: 2,
        name: "John L.",
        role: "Designer",
        text: "I was amazed at the quality of this product. It exceeded all my expectations!",
        avatar: images.Person2,
    },
    {
        id: 3,
        name: "Sarah W.",
        role: "Entrepreneur",
        text: "This is exactly what our business has been lacking. Thank you for creating such an excellent product!",
        avatar: images.Person3,
    },
];

export default function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0));
    };

    const getTestimonialIndex = (offset) => {
        return (currentIndex + offset + testimonials.length) % testimonials.length;
    };

    return (
        <Box sx={{ backgroundColor: colors.lightBrown, py: 8 }}>
            <Container maxWidth="lg">
                <Typography variant="h3" align="center" gutterBottom color={colors.text} fontWeight={'bold'}>
                    This Is What Our Customers Say
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
                    Customers are the lifeblood of any business. Their feedback drives innovation, shapes product offerings, and fosters brand loyalty. Understanding and prioritizing customer needs leads to improved satisfaction, increased retention, and long-term success.
                </Typography>
                <Box sx={{ position: 'relative', mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', height: 450 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 400, width: '100%', position: 'relative' }}>
                        {[-1, 0, 1].map((offset) => (
                            <Card
                                key={offset}
                                sx={{
                                    width: 400,
                                    height: offset === 0 ? 350 : 300,
                                    position: 'absolute',
                                    left: `calc(50% + ${offset * 250}px - 200px)`,
                                    zIndex: offset === 0 ? 2 : 1,
                                    opacity: offset === 0 ? 1 : 0.7,
                                    transition: 'all 0.3s ease',
                                    transform: `scale(${offset === 0 ? 1 : 0.9})`,
                                }}
                            >
                                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4, height: '100%' }}>
                                    <Avatar
                                        src={testimonials[getTestimonialIndex(offset)].avatar}
                                        sx={{ width: 80, height: 80, mb: 2 }}
                                    />
                                    <Typography
                                        variant="body2"
                                        paragraph
                                        sx={{
                                            flexGrow: 1,
                                            overflow: 'hidden',
                                            display: '-webkit-box',
                                            WebkitBoxOrient: 'vertical',
                                            WebkitLineClamp: 2, // Adjust the number of lines to display
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            color: colors.text
                                        }}
                                    >
                                        "{testimonials[getTestimonialIndex(offset)].text}"
                                    </Typography>
                                    <Divider sx={{ width: '100%', my: 2, bgcolor: colors.lightBrown }} />
                                    <Typography variant="h6" gutterBottom color={colors.text} fontWeight={'bold'}>
                                        {testimonials[getTestimonialIndex(offset)].name}
                                    </Typography>
                                    <Typography variant="subtitle2" color={colors.text} sx={{ marginBlockEnd: 'revert' }}>
                                        {testimonials[getTestimonialIndex(offset)].role}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="primary.main"
                                        sx={{ cursor: 'pointer', mt: 1 }}
                                    >
                                        Read More
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <IconButton
                            onClick={handlePrev}
                            aria-label="Previous testimonial"
                            sx={{ mx: 1, color: colors.darkBrown }}
                        >
                            <ArrowBack />
                        </IconButton>
                        <IconButton
                            onClick={handleNext}
                            aria-label="Next testimonial"
                            sx={{ mx: 1, color: colors.darkBrown }}
                        >
                            <ArrowForward />
                        </IconButton>
                    </Box>
                </Box>
            </Container >
        </Box >
    );
}
