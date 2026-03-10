import React from 'react';
import HeaderSub01 from './HeaderSub01.jsx';
import FooterSub01 from './footerSbub01.jsx';
import './Sub01_1.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const Sub01_1 = ({ onNavigate }) => {
  // 1. 상단 메인 비주얼 데이터
  const mainSlides = [
    { id: 1, img: '/Sub01img/artist1.png' },
    { id: 2, img: '/Sub01img/artist2.png' },
    { id: 3, img: '/Sub01img/artist3.png' },
    { id: 4, img: '/Sub01img/artist4.png' },
    { id: 5, img: '/Sub01img/artist5.png' },
    { id: 6, img: '/Sub01img/artist6.png' },
  ];

  // 2. 포스터 데이터
  const posterData = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `영화 제목 ${String(i + 1).padStart(2, '0')}`,
    img: `/Sub01img/movie${i + 1}.jpg`
  }));

  // 3. 뉴스 데이터
  const newsData = [
    { id: 1, img: '/Sub01img/movie4.jpg', title: '김배우, 7년만의 스크린 귀환', desc: '멜로 장인 김배우가 이번 영화에서 보여줄 섬세한 감정선...', date: '2026.02.11' },
    { id: 2, img: '/Sub01img/movie5.jpg', title: '신작 라인업, OTT 단독 공개', desc: '올해 하반기를 뜨겁게 달굴 기대작들이 드디어 베일을 벗고...', date: '2026.02.15' },
    { id: 3, img: '/Sub01img/movie2.jpg', title: '현장 스케치: 촬영장의 열기', desc: '무더운 날씨에도 불구하고 최고의 장면을 만들기 위한...', date: '2026.02.20' }
  ];

  return (
    <div className="sub01-1-container">
      <HeaderSub01 onNavigate={onNavigate} />

      {/* Main Visual Section */}
      <section className="sub01-main-visual">
        <div className="sub01-main-text-area">
          <h2 className="sub01-slant-text">SCENE ONE<br/>PRESENTS</h2>
        </div>
        <div className="sub01-main-slider-wrap">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            speed={1000}
            className="sub01-main-swiper"
          >
            {mainSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="main-slide-img" style={{ backgroundImage: `url(${slide.img})` }}></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* TV/DRAMA MOVIE OTT Section */}
      <section className="sub01-section">
        <h3 className="sub01-sec-title">TV/DRAMA MOVIE OTT</h3>
        <div className="sub01-poster-slider-wrap">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000 }}
            loop={true}
            centeredSlides={true}
            slidesPerView={5} // 화면에 5개 보이기
            spaceBetween={40}
            slideToClickedSlide={true} // 옆에 있는 슬라이드 클릭 시 해당 슬라이드로 이동
            className="sub01-poster-swiper"
          >
            {posterData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="poster-card">
                  <div className="poster-img-box">
                    <img src={item.img} alt={item.title} />
                  </div>
                  <p className="poster-title">{item.title}</p>
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
          <div className="sub01-video-placeholder">
            <video src="" controls poster="/Sub01img/video_thumb1.jpg"></video>
          </div>
          <div className="sub01-video-placeholder">
            <video src="" controls poster="/Sub01img/video_thumb2.jpg"></video>
          </div>
        </div>
      </section>

      {/* COMMUNITY Section */}
      <section className="sub01-section">
        <h3 className="sub01-sec-title">COMMUNITY</h3>
        <div className="sub01-news-grid">
          {newsData.map((news) => (
            <div className="sub01-news-card" key={news.id}>
              <div className="news-img-placeholder"><img src={news.img} alt={news.title} /></div>
              <div className="news-text-content">
                <h4>{news.title}</h4>
                <p>{news.desc}</p>
                <span>{news.date}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="sub01-more-btn-wrap">
          <button className="sub01-more-btn" onClick={() => onNavigate('Sub01_4')}>더보기 +</button>
        </div>
      </section>

      <FooterSub01 />
    </div>
  );
};

export default Sub01_1;