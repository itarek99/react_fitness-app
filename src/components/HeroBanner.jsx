import { Box, Button, Typography } from '@mui/material';
import BannerImage from '../assets/banner.png';
const HeroBanner = () => {
  return (
    <Box sx={{ mt: { xl: '212px', lg: '140px', xs: '70px' } }} position='relative'>
      <Typography color='#ff2625' fontWeight='600' fontSize='26px'>
        Fitness Club
      </Typography>
      <Typography lineHeight={1.2} fontWeight='bold' mb='8px' mt='30px' sx={{ fontSize: { lg: '44px', xs: '40px' } }}>
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize='20px' lineHeight='35px' mb={8}>
        Check out the most effective exercises
      </Typography>

      <Button
        href='#exercises'
        variant='contained'
        sx={{ backgroundColor: '#ff2625', lineHeight: '1', padding: '1rem 2rem', mb: { xl: '5rem' } }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontSize='200px'
        fontWeight={600}
        color='#ff2625'
        sx={{ ml: '-0.8rem', opacity: 0.1, display: { lg: 'block', xs: 'none' } }}
      >
        EXERCISE
      </Typography>
      <img src={BannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  );
};
export default HeroBanner;
