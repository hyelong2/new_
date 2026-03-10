import React from 'react';
import HeaderSub01 from './HeaderSub01.jsx';
import FooterSub01 from './footerSbub01.jsx';
import './Sub01_3.css';

// 1. props로 onNavigate를 받아옵니다.
const Sub01_3 = ({ onNavigate }) => {
  // 아티스트 데이터
  const artists = [
    { id: 'park', name: '박치원' },
    { id: 'yoon', name: '윤지아' },
    { id: 'seo', name: '서해인' },
    { id: 'do', name: '도진우' },
    { id: 'choi', name: '최명선' },
    { id: 'han', name: '한이서' }
  ];

  // 클릭 시 해당 섹션으로 부드럽게 이동 (이건 페이지 내 이동이라 그대로 둡니다)
  const scrollToArtist = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sub01-3-wrapper">
      {/* 2. Header에 함수를 전달하여 메뉴 클릭을 가능하게 합니다. */}
      <HeaderSub01 onNavigate={onNavigate} />
      
      {/* 1. 상단 지그재그 아티스트 선택 영역 */}
      <section className="sub01-artist-selector">
        <div className="zigzag-container">
          {artists.map((artist, index) => (
            <div 
              key={artist.id} 
              className={`artist-thumb-card card-${index + 1}`}
              onClick={() => scrollToArtist(artist.id)}
            >
              <div className="thumb-img-placeholder">
                <span>{artist.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 아티스트별 프로필 섹션 */}
      <main className="sub01-artist-profiles">
        {artists.map((artist) => (
          <section key={artist.id} id={artist.id} className="artist-detail-section">
            <div className="artist-top-row">
              <h2 className="artist-name-title">{artist.name}</h2>
              <div className="artist-main-img-wrap">
                <div className="artist-large-img"></div>
              </div>
            </div>

            <div className="artist-bottom-row">
              <div className="artist-media-side">
                <div className="artist-video-placeholder"><p>VIDEO AREA (400x300)</p></div>
                <div className="artist-video-placeholder"><p>VIDEO AREA (400x300)</p></div>
              </div>

              <div className="artist-info-side">
                <div className="info-group">
                  <h3>영화</h3>
                  <p>2023 | 숏버스 (Omnibus) - 에피소드 '런웨이' 주연</p>
                  <p>2025 | 너의 이름은 소음 (Rom-Com) - 여고생 '수아' 역 (주연)</p>
                </div>
                <div className="info-group">
                  <h3>TV/드라마</h3>
                  <p>2024 | 스타트업 다이어리 (SBS) - 제시카 역 (조연)</p>
                  <p>2026 | 아일랜드 패러독스 (Netflix) - (출연 예정)</p>
                </div>
                <div className="info-group">
                  <h3>수상내역</h3>
                  <p>2024 제60회 백상예술대상 - 영화부문 여자 신인연기상 수상</p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>

      <FooterSub01 />
    </div>
  );
};

export default Sub01_3;