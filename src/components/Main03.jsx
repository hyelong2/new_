import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main03.css';

const Main03 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  const slideData = [
    { 
      id: 1, 
      title: '소속사 씬원', 
      company: 'SCENE ONE', 
      desc: 'PC형 HTML/CSS 퍼블리싱', 
      img: '/imgs/project01.png',
      link: '/sub1'
    },
    { 
      id: 2, 
      title: '예매처 커튼콜', 
      company: 'CURTAIN CALL', 
      desc: '반응형 웹 디자인 및 고도화', 
      img: '/imgs/project02.png',
      link: '/sub2' 
    },
    { 
      id: 3, 
      title: '연습실 런쓰루', 
      company: 'RUN THROUGH', 
      desc: 'React 기반 포트폴리오 사이트', 
      img: '/imgs/project03.png',
      link: '/sub3'
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slideData.length - 1 ? 0 : prev + 1));
  }, [slideData.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slideData.length - 1 : prev - 1));
  };

  useEffect(() => {
    let timer;
    if (!isPaused) {
      timer = setInterval(() => {
        nextSlide();
      }, 2500);
    }
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, currentSlide]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="portfolio">
      <div 
        className="main03-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 배경 텍스트 */}
        <div className="bg-number-portfolio">
          <span className="num">03</span>
          <span className="text">PORTFOLIO</span>
        </div>

        <div className="slide-section">
          <div className="slide-content">
            <div className="slide-image-box">
              <img 
                key={`img-${currentSlide}`} 
                src={slideData[currentSlide].img} 
                alt="Project" 
              />
            </div>

            <div className="slide-text-box" key={`text-${currentSlide}`}>
              <h3 className="sub-title">{slideData[currentSlide].title}</h3>
              <h1 className="main-company">{slideData[currentSlide].company}</h1>
              <p className="tech-stack">{slideData[currentSlide].desc}</p>
              
              {/* 버튼 그룹 */}
              <div className="action-area">
                <button 
                  className="view-more-btn"
                  onClick={() => navigate(slideData[currentSlide].link)}
                >
                  VIEW MORE
                </button>
                
                <div className="manual-btns">
                  <button className="arrow-btn" onClick={prevSlide}>〈</button>
                  <button className="arrow-btn" onClick={nextSlide}>〉</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 레드카펫 바 */}
        <div className="red-carpet-bar">
          <div className="indicator-group">
            {slideData.map((_, index) => (
              <div
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main03;