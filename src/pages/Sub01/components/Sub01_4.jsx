import React, { useState } from 'react';
import HeaderSub01 from './HeaderSub01.jsx';
import FooterSub01 from './footerSbub01.jsx';
import './Sub01_4.css';

// 1. props로 onNavigate를 받아옵니다.
const Sub01_4 = ({ onNavigate }) => {
  // FAQ 답변 상태 관리
  const [activeFaq, setActiveFaq] = useState(0);

  const faqData = [
    { q: "Q. 지원 가능한 나이 제한이 있나요?", a: "1-1 A. 국적이나 성별에 관계없이 2005년생부터 2014년생까지 지원 가능합니다." },
    { q: "Q. 여러 분야에 중복 지원이 가능한가요?", a: "1-2 A. 네, 가능합니다. 다만 가장 자신 있는 분야를 '주력 분야'로 선택해 주세요." },
    { q: "Q. 현재 타 기획사 연습생이어도 지원할 수 있나요?", a: "1-3 A. 소속된 곳이 없는 상태가 원칙이지만, 정리가 가능하다면 상세 내용을 기재해 주세요." },
    { q: "Q. 합격 연락은 언제, 어떻게 오나요?", a: "3-1 A. 합격자에 한하여 지원 후 2주 이내에 개별 연락을 드립니다." }
  ];

  const newsData = Array.from({ length: 30 }, (_, i) => ({
    id: 999 - i,
    subject: `[NOTICE] Scene One 월드투어 'THE FIRST SCENE' 메인 포스터 전격 공개... ${i + 1}`,
    date: `2026.01.${31 - (i % 31)}`.replace('.1', '.01')
  }));

  return (
    <div className="sub01-4-wrapper">
      {/* 2. Header에 함수 전달 */}
      <HeaderSub01 onNavigate={onNavigate} />

      {/* 1. CONTACT US Section */}
      <section className="sub01-4-section">
        <h2 className="sub01-4-title">CONTACT US</h2>
        <div className="sub01-contact-box">
          <div className="sub01-map-wrap">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.1111!2d127.0276!3d37.5242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDMxJzI3LjEiTiAxMjfCsDAxJzM5LjQiRQ!5e0!3m2!1sko!2skr!4v123456789" 
              width="1200" height="600" style={{ border: 0 }} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
          <div className="sub01-contact-info">
             <p><span>Fax</span> 02-123-4567</p>
             <p><span>E-mail</span> sceneoneenter@naver.com</p>
             <p><span>Address</span> 서울 강남구 도산대로 15길 22, 씬원 빌딩</p>
          </div>
        </div>
      </section>

      {/* 2. AUDITION Section */}
      <section className="sub01-4-section">
        <h2 className="sub01-4-title">AUDITION</h2>
        <div className="sub01-audition-bar">씬원과 함께할 미래를 찾습니다</div>
        <div className="sub01-audition-content">
          <div className="audition-text-area">
            <h3>모집분야</h3>
            <p>연기 | 보컬 | 외모</p>
            <h3>지원방법</h3>
            <p>오디션 지원하기 버튼 클릭 후 지원서 작성</p>
            <button className="audition-apply-btn">오디션 지원하기</button>
          </div>
          <div className="sub01-faq-wrap">
            <h3>F&Q</h3>
            <div className="faq-container">
              <div className="faq-questions">
                {faqData.map((item, index) => (
                  <p 
                    key={index} 
                    className={activeFaq === index ? 'active' : ''}
                    onClick={() => setActiveFaq(index)}
                  >
                    {item.q}
                  </p>
                ))}
              </div>
              <div className="faq-answer">
                {faqData[activeFaq].a}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMMUNITY Section */}
      <section className="sub01-4-section">
        <h2 className="sub01-4-title">COMMUNITY</h2>
        <div className="sub01-board-wrap">
          <div className="board-header">
            <span>No.</span><span>Subject</span><span>Date</span>
          </div>
          <div className="board-body">
            {newsData.map((news) => (
              /* 3. 주의: 상세 페이지가 아직 없다면 href 대신 div로 두거나 '#' 처리를 하세요. */
              /* 만약 나중에 상세페이지로 넘어가게 하려면 여기서도 이벤트를 제어해야 합니다. */
              <div key={news.id} className="board-row" style={{cursor: 'default'}}>
                <span className="num">{news.id}</span>
                <span className="subject">{news.subject}</span>
                <span className="date">{news.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSub01 />
    </div>
  );
};

export default Sub01_4;