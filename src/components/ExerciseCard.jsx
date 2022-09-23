import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const ExerciseCard = ({ exercise, styleClass }) => {
  return (
    <Link className={styleClass} to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />
      <Stack direction={'row'} sx={{ mt: '40px' }}>
        <Button
          sx={{
            ml: '19px',
            color: '#fff',
            background: '#ffa9a9',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
            px: '16px',
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#fcc757',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
            px: '16px',
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        sx={{
          fontSize: '18px',
          ml: '21px',
          color: '#000',
          fontWeight: 'bold',
          mr: '11px',
          mt: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};
export default ExerciseCard;
