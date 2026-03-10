import React, { useState, useEffect } from 'react';
import HeaderSub02 from './HeaderSub02';
import FooterSub02 from './FooterSub02';
import './Sub02_2.css';

const Sub02_2 = ({ onNavigate }) => {
  const allShows = [
    { id: 1, title: "은하철도 0시 0분", date: "2026.04.10 ~ 05.30", desc: "SF 락 뮤지컬", category: "뮤지컬" },
    { id: 2, title: "달빛 세탁소의 비밀", date: "2026.04.10 ~ 05.30", desc: "따뜻한 판타지", category: "뮤지컬" },
    { id: 3, title: "타임머신 여행사", date: "26.10.10 - 12.25", desc: "패키지 투어 대소동", category: "연극" },
    { id: 4, title: "고양이 호텔", date: "26.11.01 - 27.01.15", desc: "5성급 고양이 호텔", category: "연극" },
    { id: 5, title: "불꽃의 왈츠", date: "26.09.20 - 11.10", desc: "화려한 댄스 뮤지컬", category: "뮤지컬" },
    { id: 6, title: "하늘 위 섬", date: "26.12.01 - 27.02.28", desc: "공중 부유 도시에 사는 소년의 모험", category: "뮤지컬" },
    { id: 7, title: "마법의 펜", date: "26.10.15 - 12.10", desc: "쓰는 대로 이루어지는 펜을 가진 작가 이야기", category: "연극" },
    { id: 8, title: "태양의 전사", date: "26.11.20 - 27.01.30", desc: "고대 마야 문명을 모티브로 한 웅장한 대작", category: "뮤지컬" },
    { id: 9, title: "전설의 검", date: "26.09.15 - 11.05", desc: "검을 뽑지 못한 용사들의 코믹 성장기", category: "뮤지컬" },
    { id: 10, title: "종이 비행기의 꿈", date: "26.12.10 - 27.02.20", desc: "시골 마을 소년의 비행기 조종사 도전기", category: "연극" },
    { id: 11, title: "별의 아이", date: "26.10.05 - 12.15", desc: "지구에 불시착한 외계 왕자와의 우정", category: "뮤지컬" },
    { id: 12, title: "환상의 서커스", date: "26.11.15 - 27.01.10", desc: "중력을 거스르는 무대 장치와 아크로바틱", category: "전시/행사" },
    { id: 13, title: "기계 심장", date: "26.09.25 - 11.20", desc: "사랑을 느끼고 싶은 사이보그의 노래", category: "뮤지컬" },
    { id: 14, title: "눈의 여왕의 눈물", date: "26.12.20 - 27.03.15", desc: "고전 동화의 현대적 재해석 (겨울 시즌송)", category: "뮤지컬" },
    { id: 15, title: "바다 밑의 왕국", date: "26.10.25 - 12.30", desc: "화려한 수중 영상미가 돋보이는 판타지", category: "뮤지컬" },
    { id: 16, title: "숲의 요정 테레사", date: "26.11.05 - 27.01.25", desc: "자연 보호의 메시지를 담은 주크박스 뮤지컬", category: "뮤지컬" },
    { id: 17, title: "다이아몬드 스카이", date: "26.09.30 - 11.25", desc: "1920년대 재즈 시대를 배경으로 한 쇼 뮤지컬", category: "뮤지컬" },
    { id: 18, title: "비밀의 문", date: "26.12.15 - 27.02.10", desc: "도서관 서가 뒤에 숨겨진 차원 이동문", category: "연극" },
    { id: 19, title: "로봇 친구 루루", date: "26.10.12 - 12.05", desc: "아이들과 로봇의 교감을 다룬 가족 뮤지컬", category: "뮤지컬" },
    { id: 20, title: "은하수 카페", date: "26.11.12 - 27.01.20", desc: "우주 휴게소에서 만난 인연들의 옴니버스", category: "연극" },
    { id: 21, title: "보물섬의 비밀", date: "26.09.05 - 10.30", desc: "클래식 모험극을 힙합 장르로 재해석", category: "뮤지컬" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 5; 
  const top10 = allShows.slice(0, 5); // 예시용 5개

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= top10.length - itemsPerPage ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [top10.length]);

  return (
    <div className="sub02-2-page">
      <HeaderSub02 onNavigate={onNavigate} />

      <main className="sub02-2-content">
        <section className="top10-section">
          <div className="section-title-wrap">
            <h2 className="purple-title">TOP 10</h2>
            <div className="purple-line"></div>
          </div>
          <div className="slider-wrapper">
            <div className="slider-view">
              <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 20}%)` }}>
                {top10.map((show, idx) => (
                  <div key={show.id} className="slide-card">
                    <div className="poster-box"><span className="rank-badge">{idx + 1}</span></div>
                    <div className="card-info">
                      <span className="card-cat">{show.category}</span>
                      <p className="card-name">{show.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="all-shows-section">
          <div className="all-header"><h3>전체</h3></div>
          <div className="shows-grid">
            {allShows.map((show) => (
              <div key={show.id} className="grid-card">
                <div className="grid-poster"></div>
                <div className="grid-details">
                  <p className="detail-title">{show.title}</p>
                  <p className="detail-date">{show.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <FooterSub02 />
    </div>
  );
};

export default Sub02_2;