import React from 'react';
import './HeaderFooterSub01.css';
// Font Awesome 아이콘 사용을 위해 설치가 필요합니다: npm install @fortawesome/react-fontawesome @fortawesome/free-brands-svg-icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterSub01 = () => {
  return (
    <footer className="sub01-footer-container">
      <div className="sub01-footer-inner">
        {/* 상단: 로고 및 SNS */}
        <div className="sub01-footer-top">
          <div className="sub01-footer-logo-area">
            <img 
              src="/path/to/footer-logo.png" 
              alt="SCENE ONE" 
              className="sub01-footer-logo-img" 
            />
            <span className="sub01-footer-logo-text">Entertainment Company</span>
          </div>
          
          <div className="sub01-footer-sns">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
            <a href="https://blog.naver.com" target="_blank" rel="noreferrer" className="sub01-sns-naver">N</a>
          </div>
        </div>

        {/* 중단: 회사 정보 */}
        <div className="sub01-footer-info">
          <p className="sub01-info-title">MANAGEMENT</p>
          <p>서울 강남구 어디로 11길 22-3 (어디동 456-78)</p>
          <p>22-3, audi-ro 11-gil, Gangnam-gu, Seoul, Korea</p>
          <p>Fax: 02.123.4567</p>
          <p>sceneoneenter@naver.com</p>
        </div>

        {/* 하단: 카피라이트 */}
        <div className="sub01-footer-bottom">
          <p>Copyright © 2026 Scene One. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSub01;