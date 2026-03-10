import React from 'react';
// import { Link } from 'react-router-dom'; // 이제 필요 없습니다.
import './HeaderFooterSub01.css';

const HeaderSub01 = ({ onNavigate }) => { // 1. props로 onNavigate를 받습니다.
  return (
    <header className="sub01-header-container">
      <div className="sub01-header-inner">
        <div className="sub01-logo-area">
          {/* Link 대신 a 태그나 div를 쓰고 onClick을 넣습니다. */}
          <div className="sub01-logo-link" onClick={() => onNavigate(1)} style={{cursor: 'pointer'}}>
            <img src="/path/to/your/logo.png" alt="SCENE ONE" className="sub01-logo-img" />
            <span className="sub01-logo-text">Entertainment Company</span>
          </div>
        </div>

        <nav className="sub01-nav">
          <ul className="sub01-menu-list">
            {/* 각 메뉴를 클릭하면 해당 숫자로 페이지를 바꿉니다. */}
            <li><button onClick={() => onNavigate(2)} className="sub01-menu-item">COMPANY</button></li>
            <li><button onClick={() => onNavigate(3)} className="sub01-menu-item">ARTIST</button></li>
            <li><button onClick={() => onNavigate(4)} className="sub01-menu-item">COMMUNITY</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSub01;