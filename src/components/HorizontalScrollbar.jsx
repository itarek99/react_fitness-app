import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <Swiper
      spaceBetween={40}
      grabCursor={true}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: isBodyParts ? 2 : 1,
        },
        640: {
          slidesPerView: isBodyParts ? 3 : 2,
        },
        992: {
          slidesPerView: isBodyParts ? 4 : 3,
        },
        1140: {
          slidesPerView: isBodyParts ? 5 : 3,
        },
      }}
      style={{ padding: '2rem 1rem' }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id || item} itemID={item.id || item} title={item.id || item}>
          {isBodyParts ? (
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          ) : (
            <ExerciseCard exercise={item} styleClass='exercise-card w-100' />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HorizontalScrollbar;
