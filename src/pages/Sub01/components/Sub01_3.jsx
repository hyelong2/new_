import React from 'react';
import './Sub01_3.css';

const Sub01_3 = ({ onNavigate }) => {
  const artists = [
    { id: 1, src: '../Sub01img/artist1.png', alt: 'Artist 1' },
    { id: 2, src: '../Sub01img/artist2.png', alt: 'Artist 2' },
    { id: 3, src: '../Sub01img/artist3.png', alt: 'Artist 3' },
    { id: 4, src: '../Sub01img/artist4.png', alt: 'Artist 4' },
    { id: 5, src: '../Sub01img/artist5.png', alt: 'Artist 5' },
    { id: 6, src: '../Sub01img/artist6.png', alt: 'Artist 6' },
  ];

  return (
    <div className="main-page-03">
      {/* 헤더 (공통 스타일) */}
      <header className="header">
        <div className="header-left">
          <img src="../Sub01img/logo.png" alt="SCENE ONE Logo" className="logo-img" />
          <span className="brand-text">Entertainment Company</span>
        </div>
        <nav className="header-right">
          <span className="nav-menu" onClick={() => onNavigate(1)}>COMPANY</span>
          <span className="nav-menu" onClick={() => onNavigate(2)}>ARTIST</span>
          <span className="nav-menu underline" onClick={() => onNavigate(3)}>COMMUNITY</span>
        </nav>
      </header>

      {/* 아티스트 갤러리 영역 */}
      <main className="gallery-container">
        <div className="horizontal-lines">
          <div className="line"></div>
          <div className="line"></div>
        </div>
        
        <div className="artist-grid">
          {artists.map((artist, index) => (
            <div key={artist.id} className={`artist-card card-${index + 1}`}>
              <img src={artist.src} alt={artist.alt} className="artist-img" />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Sub01_3;