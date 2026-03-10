import React, { useState, useRef } from 'react';
import HeaderSub02 from './HeaderSub02';
import FooterSub02 from './FooterSub02';
import './Sub02_1.css';

const theaterData = [
  {
    name: '아르코 예술 극장',
    url: 'http://theater.arko.or.kr',
    address: '서울 종로구 대학로8길 7',
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.147743048259!2d127.00030537636122!3d37.581028972034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2d699039145%3A0x6b499ca309328245!2z7JWE66W07L2U7JiI7Iig6rec7J6l!5e0!3m2!1sko!2skr!4v1710000000000!5m2!1sko!2skr",
    shows: [
      { title: '아르코 연극제', date: '2026.04.10', info: '전체 관람가' },
      { title: '봄의 소리', date: '2026.05.15', info: '8세 이상' }
    ]
  },
  {
    name: '국립극장',
    url: 'http://ntok.go.kr',
    address: '서울 중구 장충단로 59',
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.242589253457!2d126.9994348763599!3d37.55520857203975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2f796245d73%3A0xc3f9a77f0f6222b!2z6rWt66a96re57J6l!5e0!3m2!1sko!2skr!4v1710000000000!5m2!1sko!2skr",
    shows: [
      { title: '창극 마당', date: '2026.06.10', info: '전체 관람가' },
      { title: '세종의 꿈', date: '2026.07.15', info: '전체 관람가' }
    ]
  }
];

const Sub02_1 = ({ onNavigate }) => {
  const [activeTheater, setActiveTheater] = useState(0);

  const hotRef = useRef(null);
  const locationRef = useRef(null);
  const ageRef = useRef(null);

  const sectionRefs = [hotRef, locationRef, ageRef];
  const currentTheater = theaterData[activeTheater];

  return (
    <div className="sub02-container">
      {/* 부모에게서 받은 onNavigate를 헤더로 전달 */}
      <HeaderSub02 sectionRefs={sectionRefs} onNavigate={onNavigate} />

      <main className="main-content">
        <section className="banner-area">
          CURTAIN CALL SPECIAL BANNER
        </section>

        <section className="scroll-info">
          <p>SCROLL DOWN</p>
          <div className="arrow">↓</div>
        </section>

        <section className="ranking-section" ref={hotRef}>
          <h2 className="section-title">HOT 랭킹</h2>
          <div className="ranking-grid">
            <div className="ranking-card"><div className="poster"></div><p>뮤지컬 오페라의 유령</p></div>
            <div className="ranking-card"><div className="poster"></div><p>연극 햄릿</p></div>
            <div className="ranking-card"><div className="poster"></div><p>뮤지컬 레미제라블</p></div>
          </div>
        </section>

        <section className="location-section" ref={locationRef} style={{marginTop:'200px'}}>
          <h2 className="section-title">지역별 TOP</h2>
          <div className="location-grid">
             <div className="location-card">서울</div>
             <div className="location-card">경기/인천</div>
             <div className="location-card">부산/경상</div>
          </div>
        </section>

        <section className="theater-section" style={{marginTop:'200px'}}>
          <h2 className="section-title">공연장 안내</h2>
          <div className="theater-tabs">
            {theaterData.map((t, idx) => (
              <button 
                key={idx} 
                className={`theater-tab-btn ${activeTheater === idx ? 'active' : ''}`}
                onClick={() => setActiveTheater(idx)}
              >
                {t.name}
              </button>
            ))}
          </div>

          <div className="theater-content">
            <div className="map-area">
              <iframe
                title="Theater Map"
                src={currentTheater.mapUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
              ></iframe>
            </div>

            <div className="theater-info">
              <h3>{currentTheater.name}</h3>
              <p className="url">{currentTheater.url}</p>
              <p className="address">{currentTheater.address}</p>
              <div className="theater-logo-small">VENUE INFORMATION</div>
              
              <div className="mini-poster-grid">
                {currentTheater.shows.map((show, i) => (
                  <div key={i} className="mini-poster-card">
                    <div className="mini-img"></div>
                    <div className="mini-txt">
                      <span className="m-title">{show.title}</span>
                      <span className="m-date">기간 {show.date}</span>
                      <span className="m-info">정보 {show.info}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSub02 />
    </div>
  );
};

export default Sub02_1;