import React from 'react';
import HeaderSub01 from './HeaderSub01.jsx';
import FooterSub01 from './footerSbub01.jsx';
import './Sub01_2.css';

// 1. 여기서도 부모(App.jsx)가 주는 onNavigate 함수를 받아야 합니다.
const Sub01_2 = ({ onNavigate }) => {
  return (
    <div className="sub01-2-wrapper">
      {/* 2. Header가 메뉴 클릭을 처리할 수 있게 함수를 넘겨줍니다. */}
      <HeaderSub01 onNavigate={onNavigate} />
      
      {/* 헤더 하단 구분선 */}
      <div className="sub01-header-line"></div>

      {/* Section 1: SCENE ONE */}
      <section className="sub01-intro-section">
        <h2 className="sub01-intro-title">SCENE ONE</h2>
        <div className="sub01-intro-img-banner banner1">
          {/* 가로 1905px 세로 350px 이미지 영역 */}
        </div>
        <div className="sub01-intro-text-box">
          <p className="sub01-intro-main-text">
            "모든 위대한 이야기는 <span className="point-color">첫 번째 장면(SCENE ONE)</span>으로부터 시작됩니다."<br />
            씬원 엔터테인먼트는<br />
            아티스트의 생애 가장 빛나는 순간을 함께 그려나가기 위해 설립되었습니다.
          </p>
        </div>
      </section>

      {/* Section 2: INTRODUCE */}
      <section className="sub01-intro-section">
        <h2 className="sub01-intro-title">INTRODUCE</h2>
        <div className="sub01-intro-img-banner banner2">
          {/* 가로 1905px 세로 350px 이미지 영역 */}
        </div>
        <div className="sub01-intro-info-container">
          {/* 왼쪽: 회사 개요 테이블 */}
          <div className="sub01-info-table">
            <div className="info-row"><span>회사명</span><p>(주)씬원 엔터테인먼트 (SCENE ONE Entertainment)</p></div>
            <div className="info-row"><span>설립일</span><p>2024년 2월 11일</p></div>
            <div className="info-row"><span>대표이사</span><p>이한결</p></div>
            <div className="info-row"><span>주소</span><p>서울특별시 강남구 도산대로 15길 22, 씬원 빌딩</p></div>
            <div className="info-row"><span>주요사업</span><p>연예 매니지먼트, 신인 아티스트 발굴 및 육성</p></div>
          </div>

          {/* 오른쪽: 상세 설명 텍스트 */}
          <div className="sub01-info-desc">
            <p>
              우리는 배우 한 명 한 명이 가진 고유한 서사에 주목합니다.<br />
              단순히 화려한 겉모습을 쫓기보다, 배우가 가진 진심과 열정이 대중의 마음속에<br />
              첫 장면처럼 강렬하게 각인될 수 있도록 최선의 서포트를 제공하고자 합니다.
            </p>
            <p>
              SCENE ONE이라는 이름 아래 모인 우리는 아티스트가 오직 연기에만 몰입할<br />
              수 있는 가장 든든한 배경이 될 것입니다.<br />
              아티스트와 대중이 처음 마주하는 그 설레는 순간을 위해, 씬원 엔터테인먼트는<br />
              언제나 진정성 있는 태도로 함께 나아가며 모두가 주인공이 되는 내일을 만들어 가겠습니다.
            </p>
          </div>
        </div>
      </section>

      <FooterSub01 />
    </div>
  );
};

export default Sub01_2;