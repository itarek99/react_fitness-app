import { Box, Pagination, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const indexOfLastExercises = currentPage * exercisesPerPage;
  const indexOfFirstExercises = indexOfLastExercises - exercisesPerPage;
  const currentExercise = exercises.slice(indexOfFirstExercises, indexOfLastExercises);

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1500, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData = [];
      if (bodyPart === 'all') {
        exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }

      setExercises(exerciseData);
    };

    fetchExercisesData();
  }, [setExercises, bodyPart]);

  return (
    <Box id='exercises' my='30px' p='20px' sx={{ mt: { lg: '110px' } }}>
      <Typography variant='h3' mb='46px'>
        Showing Result
      </Typography>
      <Stack direction='row' flexWrap='wrap' justifyContent='center' sx={{ gap: { lg: '60px', xs: '30px' } }}>
        {currentExercise.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} styleClass='exercise-card' />
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > exercisesPerPage && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size='large'
          />
        )}
      </Stack>
    </Box>
  );
};
export default Exercises;
