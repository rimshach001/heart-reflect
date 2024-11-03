import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import images from '../../assets/images';
import colors from '../../constants/colors';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function ItemsList() {
    return (
        <ImageList
            sx={{
                width: '100%', height: 450,
                '&::-webkit-scrollbar': {
                    width: '6px', // Custom scrollbar width
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: '#3b2424', // Custom scrollbar thumb color
                    borderRadius: '10px', // Make the scrollbar thumb rounded
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: colors.darkBrown, // Custom scrollbar track color
                },
            }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            {itemData.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: images.necklace1,
        title: 'Breakfast',
        rows: 2,
        cols: 2,
    },
    {
        img: images.ring1,
        title: 'Burger',
    },
    {
        img: images.ring2,
        title: 'Camera',
    },
    {
        img: images.jwewlry1,
        title: 'Coffee',
        cols: 2,
    },
    {
        img: images.necklace4,
        title: 'Hats',
        cols: 2,
    },
    {
        img: images.ring4,
        title: 'Ring',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: images.jwewlry2,
        title: 'Basketball',
    },
    {
        img: images.necklace5,
        title: 'Fern',
    },
    {
        img: images.jwewlry4,
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: images.necklace4,
        title: 'Tomato basil',
    },
    {
        img: images.ring7,
        title: 'Sea star',
    },
    {
        img: images.ring6,
        title: 'Bike',
        cols: 2,
    },
];
