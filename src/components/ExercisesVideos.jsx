import { Box, Stack, Typography } from '@mui/material';

const ExercisesVideos = ({ exercisesVideos, name }) => {
  const exercisesVideosFiltered = exercisesVideos.filter((item) => item.video);

  return (
    <Box sx={{ mt: { lg: '100px', xs: '20px' } }}>
      <Typography variant='h4' mb='32px' textTransform='capitalize'>
        Watch <span style={{ color: '#ff2625' }}>{name}</span> Exercises Video
      </Typography>

      <Stack
        justifyContent='space-between'
        flexWrap='wrap'
        sx={{ flexDirection: { sm: 'row' }, alignItems: { lg: 'flex-start', xs: 'center' }, gap: '20px' }}
      >
        {exercisesVideosFiltered?.slice(1, 5).map((item, index) => {
          return (
            <a
              className='exercise-video'
              target='_blank'
              rel='noreferrer'
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              key={index}
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />

              <Box mt={2}>
                <Typography variant='h6' color='#000' textTransform='capitalize'>
                  {item.video.title.length <= 22 ? item.video.title : `${item.video.title.slice(0, 22)}...`}
                </Typography>
                <Typography color='#000' textTransform='capitalize'>
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          );
        })}
      </Stack>
    </Box>
  );
};
export default ExercisesVideos;
