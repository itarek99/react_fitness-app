import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SimilarExercises from '../components/SimilarExercises';

import Details from '../components/Details';
import ExercisesVideos from '../components/ExercisesVideos';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

const ExerciseDetails = () => {
  const [exercisesDetail, setExercisesDetail] = useState({});
  const [exercisesVideos, setExercisesVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      const exerciseDetailData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExercisesDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exercisesDetail.name}`,
        youtubeOptions
      );
      setExercisesVideos(exerciseVideosData.contents);

      const targetMuscleExercise = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/target/${exercisesDetail.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercise);

      const equipmentExercises = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${exercisesDetail.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercises);
    };

    fetchExerciseData();
  }, [id, exercisesDetail.target, exercisesDetail.equipment, exercisesDetail.name]);

  return (
    <Box>
      <Details exercisesDetail={exercisesDetail} />
      <ExercisesVideos exercisesVideos={exercisesVideos} name={exercisesDetail.name} />
      <SimilarExercises equipmentExercises={equipmentExercises} targetMuscleExercises={targetMuscleExercises} />
    </Box>
  );
};
export default ExerciseDetails;
