import React from 'react';
import './Sub01_2.css';

const Sub01_2 = ({ onNavigate }) => {
  return (
    <div className="main-page-02">
      <header className="header">
        <div className="header-left">
          <img src="/Sub01img/logo.png" alt="SCENE ONE Logo" className="logo-img" />
          <span className="brand-text">Entertainment Company</span>
        </div>
        <nav className="header-right">
          <span className="nav-menu" onClick={() => onNavigate(1)}>COMPANY</span>
          <span className="nav-menu underline" onClick={() => onNavigate(2)}>ARTIST</span>
          <span className="nav-menu" onClick={() => onNavigate(3)}>COMMUNITY</span>
        </nav>
      </header>

      {/* 메인 콘텐츠 영역 */}
      <main className="content-02">
        <h1 className="main-title">SCENE ONE</h1>
        
        {/* 중앙 배경 이미지 섹션 */}
        <div className="banner-section">
          <img src="/img/sub_banner.png" alt="Sub Banner" className="banner-img" />
        </div>

        {/* 하단 설명 문구 */}
        <div className="description-section">
          <p className="desc-text">
            "모든 위대한 이야기는 <span className="highlight">첫 번째 장면(SCENE ONE)</span>으로부터 시작됩니다."
          </p>
          <p className="desc-text">씬원 엔터테인먼트는</p>
          <p className="desc-text">아티스트의 생애 가장 빛나는 순간을 함께 그려나가기 위해 설립되었습니다.</p>
        </div>
      </main>
    </div>
  );
};

export default Sub01_2;