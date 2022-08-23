import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Details from '../components/Details';
import ExercisesVideos from '../components/ExercisesVideos';
import SimilarExercises from '../components/SimilarExercises';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const ExerciseDetails = () => {
  const [exercisesDetail, setExercisesDetails] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );

      const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?q=${exercisesDetail.name}`);

      setExercisesDetails(exerciseDetailData);
    };

    fetchExerciseData();
  }, [id]);

  return (
    <Box>
      <Details exercisesDetail={exercisesDetail} />
      <ExercisesVideos />s
      <SimilarExercises />
    </Box>
  );
};
export default ExerciseDetails;
