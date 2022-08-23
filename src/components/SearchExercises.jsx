import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import HorizontalScrollbar from '../components/HorizontalScrollbar';

import { exerciseOptions, fetchData } from '../utils/fetchData';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const inputHandler = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const searchHandler = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      console.log(searchExercises);

      setSearch('');
      setExercises(searchExercises);
    }
  };

  return (
    <Stack alignItems='center' mt='36px' justifyContent='center'>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' }, mb: '50px', textAlign: 'center' }}>
        Awesome Exercise You <br /> Should Know
      </Typography>

      <Stack direction='row' alignItems='center' justifyContent='center' flexWrap='wrap' mb='72px'>
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', sm: '400px', xs: '100%' },
            marginRight: {
              sm: '1rem',
            },
            marginBottom: { sm: 0, xs: '1rem' },
            backgroundColor: '#fff',
          }}
          height='76px'
          value={search}
          onChange={inputHandler}
          placeholder='Search Exercises'
          type='text'
        />
        <Button
          onClick={searchHandler}
          className='search-btn'
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', sm: '100px', xs: '100%' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
          }}
        >
          Search
        </Button>
      </Stack>

      <Box sx={{ position: 'relative', width: '100%' }}>
        <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};
export default SearchExercises;
