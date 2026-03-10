import React, { useState, useEffect, useCallback } from 'react';
import './Sub03_1.css';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import HeaderSub03 from './HeaderSub03';
import FooterSub03 from './FooterSub03';

const Sub03_1 = ({ onNavigate }) => {
  const [activeReview, setActiveReview] = useState(0);

  const popularSpaces = [
    { id: 1, title: "강남역 연기 연습실 연습마당", img: "/Sub03img/place1.jfif", tags: "#연기연습 #채광좋은 #보컬", price: "5,000", rating: "8", likes: "50" },
    { id: 2, title: "서초 화이트 스튜디오", img: "/Sub03img/place2.jfif", tags: "#댄스 #대형거울 #24시간", price: "7,000", rating: "12", likes: "80" },
    { id: 3, title: "역삼 아트홀", img: "/Sub03img/place3.jfif", tags: "#연극 #무대연습 #조명", price: "12,000", rating: "5", likes: "30" },
    { id: 4, title: "선릉 보컬룸", img: "/Sub03img/place4.jfif", tags: "#녹음실 #방음철저 #마이크", price: "8,000", rating: "20", likes: "110" },
    { id: 5, title: "교대 댄스연습실", img: "/Sub03img/place5.jfif", tags: "#KPOP #충격흡수바닥", price: "6,000", rating: "15", likes: "45" },
    { id: 6, title: "양재 뮤지컬룸", img: "/Sub03img/place6.jfif", tags: "#피아노 #넓은공간", price: "10,000", rating: "9", likes: "62" },
  ];

  const nearSpaces = [
    { id: 7, title: "을지로 빈티지 아틀리에", tags: "#인더스트리얼 #영상촬영", price: "18,000", rating: "25", likes: "100" },
    { id: 8, title: "충무로 연기 실험실", tags: "#영화디자인 #중앙역최단거리", price: "5,500", rating: "3", likes: "111" },
    { id: 9, title: "힙지로 밴드 합주실", tags: "#레트로감성 #드럼세션", price: "14,000", rating: "8", likes: "50" },
    { id: 10, title: "명동 다목적 스튜디오", tags: "#워크샵 #세미나", price: "20,000", rating: "10", likes: "40" },
    { id: 11, title: "남산 루프탑 연습실", tags: "#풍경좋은 #야간연습", price: "25,000", rating: "30", likes: "150" },
    { id: 12, title: "동대문 패션 스튜디오", tags: "#룩북촬영 #자연광", price: "15,000", rating: "7", likes: "28" },
  ];

  const newSpaces = [
    { id: 13, title: "강남역 연기 연습실 연습마당", tags: "#연기연습 #채광좋은 #보컬", price: "5,000", rating: "8", likes: "50" },
    { id: 14, title: "강남역 연기 연습실 연습마당", tags: "#연기연습 #채광좋은 #보컬", price: "5,000", rating: "8", likes: "50" },
    { id: 15, title: "강남역 연기 연습실 연습마당", tags: "#연기연습 #채광좋은 #보컬", price: "5,000", rating: "8", likes: "50" },
    { id: 16, title: "강남역 연기 연습실 연습마당", tags: "#연기연습 #채광좋은 #보컬", price: "5,000", rating: "8", likes: "50" },
    { id: 17, title: "강남역 연기 연습실 연습마당", tags: "#연기연습 #채광좋은 #보컬", price: "5,000", rating: "8", likes: "50" },
    { id: 18, title: "강남역 연기 연습실 연습마당", tags: "#연기연습 #채광좋은 #보컬", price: "5,000", rating: "8", likes: "50" },
  ];

  const reviews = [
    { id: 0, title: "2026 여기가 핫해요.", content: "처음 와보는데 입장부터 너무 깨끗하고 시설이 좋아서 놀랐어요!", img: "/Sub03img/place1.jfif" },
    { id: 1, title: "약간의 불편함 빼곤 대만족!", content: "방음이 정말 잘 돼서 집중하기 좋습니다.", img: "" },
    { id: 2, title: "조용한 위치, 최고의 집중 환경.", content: "역에서 가까워서 접근성이 최고예요.", img: "" },
    { id: 3, title: "인기 폭발, 주말 예약은 서두르세요.", content: "조명 조절이 가능해서 촬영하기 딱입니다.", img: "" },
    { id: 4, title: "후기 믿고 온 보람 있는 제 원픽!", content: "주기적으로 이용할 계획입니다. 추천해요!", img: "" },
  ];

  return (
    <div className="sub3-container">
      <HeaderSub03 onNavigate={onNavigate} />

      <main className="sub3-main">
        <div className="sub3-search-nav-area">
          <div className="sub3-search-box">
            <input type="text" placeholder="어떤 공간을 찾으세요?" />
            <FaSearch className="sub3-search-btn" />
          </div>
          <nav className="sub3-nav">
            {['연습실', '스튜디오', '공연장', '회의실', '스터디룸', '기타 공간'].map(m => (
              <span 
                key={m} 
                className="sub3-nav-item"
                onClick={() => onNavigate(2)}
              >
                {m}
              </span>
            ))}
          </nav>
          
          {/* 참고용: 나중에 페이지가 다 달라질 경우
          { [
              { name: '연습실', page: 2 },
              { name: '스튜디오', page: 3 },
              { name: '공연장', page: 4 }
            ].map(item => (
              <span key={item.name} onClick={() => onNavigate(item.page)}>
                {item.name}
              </span>
            ))
          }*/}

          <div className="sub3-filter-row">
            {['인원수', '평수', '부가시설', '와이파이', '취식가능', '가격 낮은 순', '가격 높은 순'].map(f => (
              <span key={f} className="sub3-filter-tag">{f}</span>
            ))}
          </div>
        </div>

        <Section title="인기 공간" data={popularSpaces} badge="HOT" auto={true} />
        <Section title="가까운 공간" data={nearSpaces} badge="쿠폰 가능" auto={false} />
        <Section title="NEW" data={newSpaces} badge="NEW" auto={true} />

        <section className="sub3-review-section">
          <div className="sub3-review-top-info">
            <h2>이용후기</h2>
            <div className="sub3-more-link">
              <span>더 많은 이용후기 보러 가기</span>
              <FaChevronRight className="sub3-more-icon" />
            </div>
          </div>
          
          <div className="sub3-review-main-content">
            <div className="sub3-review-left-box">
              <div className="sub3-review-visual-card">
                <div className="sub3-review-img-placeholder">
                  {reviews[activeReview].img ? (
                    <img src={reviews[activeReview].img} alt={reviews[activeReview].title} className="sub3-review-img" />
                  ) : (
                    <div className="sub3-no-img">이미지 준비중</div>
                  )}
                </div>
              </div>
              {/* 이미지 하단 텍스트 영역 */}
              <div className="sub3-review-desc-area">
                <span className="sub3-review-main-title">{reviews[activeReview].title}</span>
                <p className="sub3-review-main-desc">{reviews[activeReview].content}</p>
              </div>
            </div>

            <div className="sub3-review-right-side">
              <div className="sub3-review-right-tabs">
                {reviews.map((r, i) => (
                  <div 
                    key={i} 
                    className={`sub3-review-tab-item ${activeReview === i ? 'active' : ''}`}
                    onClick={() => setActiveReview(i)}
                  >
                    <span className="sub3-tab-index">{i + 1}</span>
                    <span className="sub3-tab-label">{r.title}</span>
                  </div>
                ))}
              </div>
              <div className="sub3-review-navigation">
                <FaChevronLeft 
                  className="sub3-nav-arrow" 
                  onClick={() => setActiveReview(prev => (prev === 0 ? reviews.length - 1 : prev - 1))} 
                />
                <FaChevronRight 
                  className="sub3-nav-arrow" 
                  onClick={() => setActiveReview(prev => (prev === reviews.length - 1 ? 0 : prev + 1))} 
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterSub03 />
    </div>
  );
};

const Section = ({ title, data, badge, auto }) => {
  const [idx, setIdx] = useState(0);
  const next = useCallback(() => {
    setIdx((p) => (p + 1 > data.length - 3 ? 0 : p + 1));
  }, [data.length]);
  const prev = () => {
    setIdx((p) => (p - 1 < 0 ? data.length - 3 : p - 1));
  };
  useEffect(() => {
    if (auto) {
      const t = setInterval(next, 4000);
      return () => clearInterval(t);
    }
  }, [auto, next]);

  return (
    <section className="sub3-content-shelf">
      <h2 className="sub3-shelf-name">{title}</h2>
      <div className="sub3-shelf-wrapper">
        <FaChevronLeft className="sub3-shelf-arrow" onClick={prev} />
        <div className="sub3-shelf-viewport">
          <div className="sub3-shelf-track" style={{ transform: `translateX(-${idx * 465}px)` }}>
            {data.map((item) => (
              <div className="sub3-card-item" key={item.id}>
                <div className="sub3-card-visual">
                  {item.img ? (
                    <img src={item.img} alt={item.title} className="sub3-card-img" />
                  ) : (
                    <div className="sub3-no-img">이미지 준비중</div> 
                  )}
                  <span className="sub3-card-badge">{badge}</span>
                </div>
                
                <div className="sub3-card-details">
                  <h3>{item.title}</h3>
                  <p className="sub3-card-tags">{item.tags}</p>
                  <div className="sub3-card-meta">
                    <span className="sub3-card-price">{item.price} 원/시간</span>
                    <span className="sub3-card-stats">💬 {item.rating} ❤️ {item.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <FaChevronRight className="sub3-shelf-arrow" onClick={next} />
      </div>
    </section>
  );
};

export default Sub03_1;