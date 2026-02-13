import React from 'react';
import './Main01.css';

const Main01 = () => {

  return (
  <div id="home" className="main01-viewport">
    <div className="main-container">
      <header className="header">
        <div className="logo">PORTFOLIO</div>
        <nav className="nav-menu">
          <a href="#home" className="active">HOME</a>
          <a href="#profile">PROFILE</a>
          <a href="#portfolio">PORTFOLIO</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <section className="visual-section">
        <div className="red-bar"></div>
        <div className="trophy-wrapper">
          <img src="/imgs/goldstar.png" alt="트로피" className="trophy-img" />
        </div>
      </section>

      <footer className="footer-content">
        <h2 className="korean-name">ㅂㅏㄱ ㅎㅖ ㄹㅣㄴ</h2>
        <h1 className="english-name">PARK HYE LIN</h1>
        <div className="portfolio-label">
          <span className="line"></span>
          <span className="text">PORTFOLIO</span>
          <span className="line"></span>
        </div>
      </footer>
    </div>
</div>
  );
};

export default Main01;