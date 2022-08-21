import { Stack, Typography } from '@mui/material';
import Icon from '../assets/fitness.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type='button'
      alignItems='center'
      justifyContent='center'
      className='bodyPart-card'
      sx={{
        borderTop: item === bodyPart ? '4px solid #ff2625' : '',
        boxShadow: '0 5px 15px 0px rgba(0,0,0,0.1);',
        backgroundColor: '#fff',
        height: '200px',
        cursor: 'pointer',
        gap: '40px',
        userSelect: 'none',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scroll({ top: 1500, left: 100, behavior: 'smooth' });
      }}
    >
      <img src={Icon} alt='fitness' style={{ width: '60px' }} />
      <Typography fontSize='16px' fontWeight='bold' color='#3a1212' textTransform='capitalize'>
        {item}
      </Typography>
    </Stack>
  );
};
export default BodyPart;
