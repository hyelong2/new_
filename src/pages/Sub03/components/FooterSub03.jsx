import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { RiKakaoTalkFill } from 'react-icons/ri';
import './HeaderFooter03.css';

const FooterSub03 = () => {
  return (
    <footer className="s3-common-footer">
      <div className="s3-footer-inner">
        <div className="s3-footer-top">
          <div className="s3-footer-logo">
            RUN <span className="s3-logo-sub">연습실 예약, 예술가의 작업실</span>
          </div>
          <nav className="s3-footer-links">
            <a href="#!">배너광고 문의</a>
            <span className="divider">|</span>
            <a href="#!" className="bold">이용약관</a>
            <span className="divider">|</span>
            <a href="#!" className="bold">개인정보처리방침</a>
            <span className="divider">|</span>
            <a href="#!">운영정책</a>
            <span className="divider">|</span>
            <a href="#!">청소년보호정책</a>
            <span className="divider">|</span>
            <a href="#!">고객센터</a>
          </nav>
        </div>

        <div className="s3-footer-mid">
          <div className="s3-biz-details">
            <div className="biz-row">
              <span>상호명: 주식회사 런스루 (RUN THROUGH)</span>
              <span className="divider">|</span>
              <span>대표: 김연습</span>
              <span className="divider">|</span>
              <span>사업자등록번호: 123-45-67890</span>
            </div>
            <div className="biz-row">
              <span>통신판매업신고번호: 2026-서울강남-1234호</span>
              <a href="#!" className="link-btn">사업자등록정보</a>
            </div>
            <div className="biz-row">
              <span>영업소재지: 서울특별시 강남구 테헤란로 567 런스루빌딩 8층</span>
              <span className="divider">|</span>
              <span>이메일: <a href="mailto:contact@runthrough.kr">contact@runthrough.kr</a></span>
              <span className="divider">|</span>
              <span>제휴문의: <a href="mailto:partner@runthrough.kr">partner@runthrough.kr</a></span>
            </div>
            <div className="biz-row">
              <span>대표전화: 1588-0000 (평일 10:00 ~ 18:00)</span>
              <span className="divider">|</span>
              <span>1:1 채팅상담: 365일 09:00 ~ 22:00</span>
              <a href="#!" className="link-btn">문의하기 바로가기</a>
            </div>
          </div>

          <div className="s3-sns">
            <a href="#!" className="s3-sns-icon naver" title="Naver Blog">B'</a>
            <a href="#!" className="s3-sns-icon fb" title="Facebook"><FaFacebook /></a>
            <a href="#!" className="s3-sns-icon tw" title="X (Twitter)"><FaTwitter /></a>
            <a href="#!" className="s3-sns-icon kakao" title="KakaoTalk"><RiKakaoTalkFill /></a>
            <a href="#!" className="s3-sns-icon insta" title="Instagram"><FaInstagram /></a>
          </div>
        </div>

        <div className="s3-footer-bottom">
          <p className="disclaimer">
            런스루는 통신판매중개자이며 통신판매의 당사자가 아닙니다. 따라서 런스루는 공간 거래정보 및 거래에 대해 책임을 지지 않습니다.<br />
            단, 등록된 연습실의 품질 및 서비스에 대한 민원은 고객센터를 통해 적극 지원합니다.
          </p>
          <div className="footer-copyright">
            <span className="logout-btn">로그아웃</span>
            <p>Copyright © RUN THROUGH Corp. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSub03;