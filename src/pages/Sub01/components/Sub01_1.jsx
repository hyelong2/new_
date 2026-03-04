import React from 'react';
import './Sub01_1.css';

// 1. 이미지 파일을 import 합니다. 
// 현재 파일(Sub01_1.jsx)은 components 폴더 안에 있으므로, 
// ../ 를 통해 상위 폴더(Sub01)로 나간 뒤 Sub01img 폴더로 들어가야 합니다.
import logoImg from '../Sub01img/logo.png';
import mainHeroImg from '../Sub01img/main.png';

const Sub01_1 = ({ onNavigate }) => {
  return (
    <div className="main-page">
      <header className="header">
        <div className="header-left">
          {/* 2. 문자열 경로 대신 import한 변수명을 src에 넣습니다. */}
          <img src={logoImg} alt="SCENE ONE Logo" className="logo-img" />
          <span className="brand-text">Entertainment</span>
        </div>
        <nav className="header-right">
          <span className="nav-menu" onClick={() => onNavigate(1)}>COMPANY</span>
          <span className="nav-menu" onClick={() => onNavigate(2)}>ARTIST</span>
          <span className="nav-menu" onClick={() => onNavigate(3)}>COMMUNITY</span>
        </nav>
      </header>

      <section className="content-container">
        <div className="side-text-box">
          <span className="rotated-text">The First Scene, The Best Actor</span>
        </div>
        <div className="hero-img-box">
          {/* 여기도 변수명으로 교체합니다. */}
          <img src={mainHeroImg} alt="Main Artist" className="main-hero-img" />
        </div>
      </section>
    </div>
  );
};

export default Sub01_1;