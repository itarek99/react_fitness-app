import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Swiper
      spaceBetween={40}
      grabCursor={true}
      loop={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1140: {
          slidesPerView: 5,
        },
      }}
      style={{ padding: '2rem 1rem' }}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id || item} itemID={item.id || item} title={item.id || item}>
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default HorizontalScrollbar;
