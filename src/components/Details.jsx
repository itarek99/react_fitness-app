import { Stack, Typography } from '@mui/material';

const Details = ({ exercisesDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exercisesDetail;

  return (
    <Stack gap='60px' sx={{ flexDirection: { md: 'row' }, py: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />

      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
        <Typography textTransform='capitalize' variant='h3'>
          {name}
        </Typography>
        <Stack direction='column' gap='12px'>
          <Stack direction='row' gap='6px' alignItems='center'>
            <Typography variant='h6'>Body Part:</Typography>
            <Typography textTransform='capitalize' variant='h6' color='#ff2625'>
              {bodyPart}
            </Typography>
          </Stack>
          <Stack direction='row' gap='6px' alignItems='center'>
            <Typography variant='h6'>Target:</Typography>
            <Typography textTransform='capitalize' variant='h6' color='#ff2625'>
              {target}
            </Typography>
          </Stack>
          <Stack direction='row' gap='6px' alignItems='center'>
            <Typography variant='h6'>Equipment</Typography>
            <Typography textTransform='capitalize' variant='h6' color='#ff2625'>
              {equipment}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};
export default Details;
