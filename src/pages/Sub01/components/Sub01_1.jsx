import React from 'react';
import HeaderSub01 from './HeaderSub01.jsx';
import FooterSub01 from './footerSbub01.jsx';
import './Sub01_1.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// 1. props로 onNavigate를 꼭 받아야 합니다!
const Sub01_1 = ({ onNavigate }) => {
  return (
    <div className="sub01-1-container">
      {/* 2. Header에도 함수를 전달해줘야 메뉴 클릭 시 이동합니다 */}
      <HeaderSub01 onNavigate={onNavigate} />

      {/* Main Visual Section */}
      <section className="sub01-main-visual">
        <div className="sub01-main-text-area">
          <h2 className="sub01-slant-text">SCENE ONE<br/>PRESENTS</h2>
        </div>
        <div className="sub01-main-slider-wrap">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            loop={true}
            className="sub01-main-swiper"
          >
            <SwiperSlide><div className="main-slide-img slide1"></div></SwiperSlide>
            <SwiperSlide><div className="main-slide-img slide2"></div></SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* TV/DRAMA MOVIE OTT Section */}
      <section className="sub01-section">
        <h3 className="sub01-sec-title">TV/DRAMA MOVIE OTT</h3>
        <div className="sub01-poster-slider-wrap">
          <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3000 }}
            navigation={true}
            loop={true}
            centeredSlides={true}
            slidesPerView={5}
            spaceBetween={30}
            className="sub01-poster-swiper"
          >
            {[...Array(10)].map((_, i) => (
              <SwiperSlide key={i}>
                <div className="poster-card">
                  <div className="poster-img-box"></div>
                  <p>이런영화 {i + 1}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* VIDEO Section */}
      <section className="sub01-section">
        <h3 className="sub01-sec-title">VIDEO</h3>
        <div className="sub01-video-grid">
          <div className="sub01-video-placeholder">VIDEO 1 (Click to Play)</div>
          <div className="sub01-video-placeholder">VIDEO 2 (Click to Play)</div>
        </div>
      </section>

      {/* COMMUNITY Section */}
      <section className="sub01-section">
        <h3 className="sub01-sec-title">COMMUNITY</h3>
        <div className="sub01-news-grid">
          {[1, 2, 3].map((item) => (
            <div className="sub01-news-card" key={item}>
              <div className="news-img-placeholder"></div>
              <div className="news-text-content">
                <h4>김배우, 이런영화 7년만의 귀환</h4>
                <p>김배우 멜로에 도전하다. 이런영화에서 여주인공 OO으로 명활약한 김배우의 머시깽이 거시기...</p>
                <span>2026.02.11</span>
              </div>
            </div>
          ))}
        </div>
        <div className="sub01-more-btn-wrap">
          <button className="sub01-more-btn" onClick={() => window.location.href='/Sub01_4'}>더보기 +</button>
        </div>
      </section>

      <FooterSub01 />
    </div>
  );
};

export default Sub01_1;