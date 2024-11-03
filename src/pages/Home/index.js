import React from 'react'
import HeroBanner from '../../components/HeroBanner'
import Box from '@mui/material/Box';
import NewArrival from '../../components/NewArrival';
import JewelrySection from '../../components/mainItem';
import TestimonialSection from '../../components/Testimonials';
import ChooseItem from '../../components/Choose';


const index = () => {
    return (
        <Box>
            <HeroBanner />
            <NewArrival />
            <JewelrySection />
            <TestimonialSection />
            <ChooseItem />
        </Box>
    )
}

export default index