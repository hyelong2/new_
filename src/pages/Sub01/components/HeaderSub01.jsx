import React from 'react';
import './HeaderFooterSub01.css';

const HeaderSub01 = ({ onNavigate }) => { 
  return (
    <header className="sub01-header-container">
      <div className="sub01-header-inner">
        <div className="sub01-logo-area">
          <div className="sub01-logo-link" onClick={() => onNavigate(1)} style={{cursor: 'pointer'}}>
            <img src="./Sub01img/Sub01logo.png" alt="SCENE ONE" className="sub01-logo-img" />
            <span className="sub01-logo-text">Entertainment Company</span>
          </div>
        </div>

        <nav className="sub01-nav">
          <ul className="sub01-menu-list">
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