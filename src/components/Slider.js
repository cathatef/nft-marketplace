import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

import slideOne from '../assets/swiper-imgs/0001.jpeg';
import slideTwo from '../assets/swiper-imgs/0002.jpeg';
import slideThree from '../assets/swiper-imgs/0003.jpeg';
import slideFour from '../assets/swiper-imgs/0004.jpeg';
import slideFive from '../assets/swiper-imgs/0005.jpeg';
import slideSix from '../assets/swiper-imgs/0006.jpeg';
import slideSeven from '../assets/swiper-imgs/0007.jpeg';
import slideEight from '../assets/swiper-imgs/0008.jpeg';
import slideNine from '../assets/swiper-imgs/0009.jpeg';
import slideTen from '../assets/swiper-imgs/0010.jpeg';
import slideEleven from '../assets/swiper-imgs/0011.jpeg';
import slideTwelve from '../assets/swiper-imgs/0012.jpeg';
import slideThirteen from '../assets/swiper-imgs/0013.jpeg';
import slideFourteen from '../assets/swiper-imgs/0014.jpeg';
import slideFifteen from '../assets/swiper-imgs/0015.jpeg';
import slideSixteen from '../assets/swiper-imgs/0016.jpeg';
import slideSeventeen from '../assets/swiper-imgs/0017.jpeg';
import slideEighteen from '../assets/swiper-imgs/0018.jpeg';
import slideNineteen from '../assets/swiper-imgs/0019.jpeg';
import slideTwinty from '../assets/swiper-imgs/0020.jpeg';

import "../styles/Slider.css"

const Slider = () => {

  return (
    <>
    <div id="slider">
        <Swiper
          className="swiper"
          modules={[Autoplay]}
          slidesPerView="auto"
          speed={5000}
          loop="true"
          autoplay={{
            delay: 1,
            disableOnInteraction: false
          }}
          breakpoints={{
            // when window width is >= 768px
            768: {
              // slidesPerView: {auto},
              spaceBetween: 10,
              speed: 3000
            }
          }}>
          <div className="swiper-wrapper">
            <SwiperSlide className="slide">
              {' '}
              <img src={slideOne} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideTwo} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideThree} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideFour} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideFive} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideSix} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideSeven} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideEight} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideNine} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideTen} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideEleven} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideTwelve} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideThirteen} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideFourteen} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideFifteen} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideSixteen} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideSeventeen} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideEighteen} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideNineteen} alt="one" />{' '}
            </SwiperSlide>
            <SwiperSlide className="slide">
              {' '}
              <img src={slideTwinty} alt="one" />{' '}
            </SwiperSlide>
          </div>
        </Swiper>
    </div>
    </>
  );
};

export default Slider;
