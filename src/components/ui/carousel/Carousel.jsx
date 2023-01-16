import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import PropTypes from 'prop-types';

import "./carousel.scss";

export const Carousel = ({ data, title }) => {
  const navigate = useNavigate();

  const showDetail = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className='carousel'>
      <h2 className="carousel-header">{title}</h2>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={30}
        slidesPerView={4}
        centeredSlides={true}
        loop
        speed={600}
        className='myswiper'
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className='swiperslide'>
            <div
              onClick={() => showDetail(item.id)}
              style={{backgroundImage: 'url(' + item.image + ')'}}
              className='carousel-image' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


Carousel.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
};
