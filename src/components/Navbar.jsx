import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Stack direction='row' sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' } }}>
      <Link style={{ textDecoration: 'none', color: 'black', marginRight: '20px' }} to='/'>
        <Typography fontSize='30px' lineHeight={1} fontWeight='bold'>
          Pro Fitness
        </Typography>
      </Link>
      <Stack direction='row' gap='40px' fontSize='24px' alignItems='flex-end'>
        <Link style={{ textDecoration: 'none', color: '#3a1212', borderBottom: '2px solid #ff2625' }} to='/'>
          Home
        </Link>
        <a href='#exercises' style={{ textDecoration: 'none', color: '#3a1212' }}>
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};
export default Navbar;
