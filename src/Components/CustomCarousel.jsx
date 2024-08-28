import React from 'react';
import Slider from 'react-slick';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/system';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import food from '../assets/imgs/OF&D.png'
import foodI from '../assets/imgs/OF&D-i.png'
import Res from '../assets/imgs/Res.png'
import ResI from '../assets/imgs/Res-i.png'
import Philo from '../assets/imgs/Philo.png'
import PhiloI from '../assets/imgs/Philo-i.png'

const CarouselContainer = styled(Box)(({ theme }) => ({
width: '97%',
maxWidth: '100%',
margin: '0 auto',
padding: '0px',
[theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '0 20px',
},
[theme.breakpoints.up('xl')]: {
    maxWidth: '1200px',
    margin: '0 auto', // Center the container with auto margin
},
}));

const StyledCard = styled(Card)({
borderRadius: '0px',
overflow: 'hidden',
boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
'&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 0.5s ease',
},
});

const CustomCarousel = () => {
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
        
    {
        breakpoint: 1441,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            const slickTrack = document.querySelector('.slick-track');
            if (slickTrack) {
            slickTrack.style.display = 'flex';
            slickTrack.style.justifyContent = 'center';
            slickTrack.style.gap = '20px'; // Add space between slides
            }
        },
        },
    },
    {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        },
    },
    {
        breakpoint: 769,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        },
    },
    {
        breakpoint: 480,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        },
    },
    ],
};

const images = [
    {
    url: food,
    // title: 'Stunning Landscape',
    },
    {
    url: foodI,
    // title: 'Beautiful Pot',
    },
    {
    url: Res,
    // title: 'Shining Drops',
    },
    {
    url: ResI,
    // title: 'Shining Drops',
    },
    {
    url: Philo,
    // title: 'Shining Drops',
    },
    {
    url: PhiloI,
    // title: 'Beautiful Pot',
    },
];

return (
    <CarouselContainer>
    <Slider {...settings}>
        {images.map((image, index) => (
        <Box key={index} sx={{ px: { xl: 1 } }}> {/* Add padding for xl screens */}
            <StyledCard>
            <CardMedia
                component="img"
                sx={{
                height: {
                    xs: 400,  
                    sm: 400,  
                    md: 400,  
                },
                }}
                image={image.url}
                alt={image.title}
            />
            <Typography variant="h6" align="center" sx={{ mt: 2 }}>
                {image.title}
            </Typography>
            </StyledCard>
        </Box>
        ))}
    </Slider>
    </CarouselContainer>
);
};

export default CustomCarousel;
