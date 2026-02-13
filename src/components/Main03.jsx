import React, { useState, useEffect } from 'react';
import './Main03.css';

const Main03 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 1. 데이터 배열을 3개로 축소
  const slideData = [
    { 
      id: 1, 
      title: '회사', 
      company: 'COMPANY 01', 
      desc: 'PC형 HTML/CSS 퍼블리싱', 
      img: '/imgs/project01.png' 
    },
    { 
      id: 2, 
      title: '회사', 
      company: 'COMPANY 02', 
      desc: '반응형 웹 디자인 및 고도화', 
      img: '/imgs/project02.png' 
    },
    { 
      id: 3, 
      title: '회사', 
      company: 'COMPANY 03', 
      desc: 'React 기반 포트폴리오 사이트', 
      img: '/imgs/project03.png' 
    },
  ];

  // 2. 자동 슬라이드 로직 (데이터 길이에 맞춰 자동 동작)
  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
      }, 2500); 
    }
    return () => clearInterval(timer);
  }, [isPaused, slideData.length]);

  return (
    <div id="portfolio">
      <div 
        className="main03-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 상단 배경 텍스트 */}
        <div className="bg-number-portfolio">
          <span className="num">03</span>
          <span className="text">PORTFOLIO</span>
        </div>

        {/* 메인 슬라이드 구역 */}
        <div className="slide-section">
          <div className="slide-content">
            {/* 좌측 이미지 박스 */}
            <div className="slide-image-box">
              <img 
                key={`img-${currentSlide}`} 
                src={slideData[currentSlide].img} 
                alt={`Project ${currentSlide + 1}`} 
              />
            </div>

            {/* 우측 텍스트 박스 */}
            <div className="slide-text-box" key={`text-${currentSlide}`}>
              <h3 className="sub-title">{slideData[currentSlide].title}</h3>
              <h1 className="main-company">{slideData[currentSlide].company}</h1>
              <p className="tech-stack">{slideData[currentSlide].desc}</p>
              <button className="view-more-btn">VIEW MORE</button>
            </div>
          </div>
        </div>

        {/* 하단 레드바 & 인디케이터 */}
        <div className="red-carpet-bar">
          <div className="indicator-group">
            {slideData.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main03;