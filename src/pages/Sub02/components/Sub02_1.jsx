import React, { useState, useRef } from 'react';
import HeaderSub02 from './HeaderSub02';
import FooterSub02 from './FooterSub02';
import './Sub02_1.css';

const Sub02_1 = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeTheater, setActiveTheater] = useState(0);

  const tabs = ['HOT', '지역별', '연령별'];
  const categories = ['뮤지컬', '연극', '전시/행사', '클래식/무용', '스포츠'];
  const theaters = ['아르코 예술 극장', '예술의전당 오페라극장', '블루스퀘어 신한카드홀', '충무아트센터', '샤롯데씨어터'];

  const hotRef = useRef(null);
  const locationRef = useRef(null);
  const ageRef = useRef(null);

  const sections = [
    { title: 'HOT', id: 'hot', ref: hotRef },
    { title: '지역별 TOP', id: 'location', ref: locationRef },
    { title: '연령별 TOP', id: 'age', ref: ageRef }
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
    setActiveMenu(null);
    sections[index].ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="sub02-container">
      <HeaderSub02 
        tabs={tabs} 
        activeTab={activeTab} 
        handleTabClick={handleTabClick}
        categories={categories}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
        setActiveTab={setActiveTab}
      />

      <main className="main-content">
        <div className="banner-area">
          <p>BANNER IMAGE AREA</p>
        </div>
        
        <div className="scroll-info">
          <span>내려보기</span>
          <div className="arrow">∨</div>
        </div>

        <div className="ranking-container">
          {sections.map((section) => (
            <section key={section.id} className="ranking-section" ref={section.ref}>
              <div className="section-header">
                <h2 className="section-title">{section.title}</h2>
                <button className="view-more">더보기</button>
              </div>
              <div className="item-grid">
                {[1, 2, 3].map((rank) => (
                  <div key={rank} className="item-card">
                    <div className="image-box">
                      <span className="rank-number">{rank}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="theater-section">
          <h2 className="section-title">공연장</h2>
          <div className="theater-tabs">
            {theaters.map((name, i) => (
              <button
                key={i}
                className={`theater-tab-btn ${activeTheater === i ? 'active' : ''}`}
                onClick={() => setActiveTheater(i)}
              >
                {name}
              </button>
            ))}
          </div>

          <div className="theater-content">
            <div className="map-area">
              <iframe
                title="Theater Map"
                // 실제 구글 지도 임베드 URL로 교체 (아르코 예술 극장 기준)
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.9404283995894!2d127.00117077642646!3d37.58004652305599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca32e18d0421d%3A0xc331a9829f074a38!2z7JWE66W07L2U7JiI7Iig6re57J6l!5e0!3m2!1sko!2skr!4v1710000000000!5m2!1sko!2skr"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="theater-info">
              <h3>{theaters[activeTheater]}</h3>
              <p className="url">http://theater.arko.or.kr</p>
              <p className="address">서울 종로구 대학로8길 7</p>
              <div className="theater-logo-small">아르코·대학로예술극장</div>
              
              <div className="mini-poster-grid">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="mini-poster-card">
                    <div className="mini-img"></div>
                    <div className="mini-txt">
                      <span className="m-title">공연 제목 {i}</span>
                      <span className="m-date">기간 26.03.26 ~ 26.03.30</span>
                      <span className="m-info">정보 드라마 · 105분 · 만 14세 이상</span>
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