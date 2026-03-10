import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { SiNaver } from "react-icons/si";
import './HeaderFooter02.css'; 

const FooterSub02 = () => {
  const iconStyle = { fontSize: '24px', verticalAlign: 'middle' };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-links">
          <span>회사소개</span> | <strong>개인정보처리방침</strong> | <span>이용약관</span> | <span>티켓판매</span> | <span>공지사항</span>
        </div>
      </div>
      <div className="footer-main">
        <div className="f-left">
          <h2 className="f-logo">CURTAIN CALL</h2>
          <div className="f-info">
            <p>대표이사: 홍길동</p>
            <p>주소: 서울 강남구 강남동 강남빌 12-34</p>
            <p>사업자등록번호: 123-45-67890</p>
            <p>이메일: call.gmail.com</p>
          </div>
        </div>
        <div className="f-right">
          <div className="customer-center">
            <p>고객센터: 1234-5678 | 이메일</p>
            <p>일반문의 : 09:00~18:00 (연중무휴)</p>
            <p>고객센터 미운영 시간에는 1:1 문의하기를 이용해주세요.</p>
            <div className="f-links-area">
              <a href="/qna" className="underline-link">1:1 문의하기</a>
              <a href="/faq" className="underline-link">자주하는 질문</a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-bar">
        <p>Copyright © CurtainCall. All Rights Reserved.</p>
        <div className="f-sns">
          <span>CURTAIN CALL SNS</span>
          <div className="sns-icons-wrapper">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="sns-icon" style={{ color: '#1877F2' }}>
              <FaFacebook style={iconStyle} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="sns-icon" style={{ color: '#E4405F' }}>
              <FaInstagram style={iconStyle} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="sns-icon" style={{ color: '#FF0000' }}>
              <FaYoutube style={iconStyle} />
            </a>
            <a href="https://naver.com" target="_blank" rel="noreferrer" className="sns-icon" style={{ color: '#03C75A' }}>
              <SiNaver style={{ fontSize: '20px', verticalAlign: 'middle' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSub02;