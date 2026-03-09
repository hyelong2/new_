import React from 'react';
import './Sub01_1.css';

import logoImg from '../Sub01img/logo.png';
import mainHeroImg from '../Sub01img/main.png';

const Sub01_1 = ({ onNavigate }) => {
  return (
    <div className="main-page">
      <header className="header">
        <div className="header-left">
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
          <img src={mainHeroImg} alt="Main Artist" className="main-hero-img" />
        </div>
      </section>
    </div>
  );
};

export default Sub01_1;