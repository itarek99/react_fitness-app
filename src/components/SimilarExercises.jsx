import { Box, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
      <Typography variant='h4'>Same Muscle Group Exercises</Typography>
      <Box sx={{ position: 'relative', width: '100%' }}>
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
      </Box>
      <Typography variant='h4'>Same Equipment Exercises</Typography>
      <Box sx={{ position: 'relative', width: '100%' }}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Box>
    </Box>
  );
};
export default SimilarExercises;
