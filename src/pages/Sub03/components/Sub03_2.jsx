import React, { useState } from 'react';
import './Sub03_2.css';
import { FaChevronLeft, FaTimes } from 'react-icons/fa';
import HeaderSub03 from './HeaderSub03';
import FooterSub03 from './FooterSub03';

const Sub03_2 = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeMenu, setActiveMenu] = useState('전체');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const spaceList = [
    { id: 1, title: "강남역 연기 연습실 연습마당", tags: "#연기연습 #채광좋은 #보컬", price: "5,000" },
    { id: 2, title: "서초 화이트 스튜디오", tags: "#댄스 #대형거울 #24시간", price: "7,000" },
    { id: 3, title: "역삼 아트홀", tags: "#연극 #무대연습 #조명", price: "12,000" },
    { id: 4, title: "선릉 보컬룸", tags: "#녹음실 #방음철저 #마이크", price: "8,000" },
    { id: 5, title: "교대 댄스연습실", tags: "#KPOP #충격흡수바닥", price: "6,000" },
    { id: 6, title: "양재 뮤지컬룸", tags: "#피아노 #넓은공간", price: "10,000" },
    { id: 7, title: "을지로 빈티지 아틀리에", tags: "#인더스트리얼 #영상촬영", price: "18,000" },
    { id: 8, title: "충무로 연기 실험실", tags: "#영화디자인 #중앙역최단거리", price: "5,500" },
    { id: 9, title: "합정 재즈 합주실", tags: "#그랜드피아노 #어쿠스틱", price: "16,000" },
    { id: 10, title: "망원 개인 연습실", tags: "#집중모드 #1인용", price: "3,500" },
    { id: 11, title: "연남 스몰 시어터", tags: "#소규모공연 #낭독회", price: "30,000" },
    { id: 12, title: "상수 크리에이터룸", tags: "#유튜브 #크로마키", price: "11,000" },
  ];

  const recentReviews = [
    { id: 0, title: "강남역 연기 연습실", content: "처음 와보는데 무난해요. 거울이 조금 더러워요." },
    { id: 1, title: "서초 화이트 스튜디오", content: "시설이 정말 깨끗하고 넓어서 좋았습니다." },
    { id: 2, title: "역삼 아트홀", content: "조명이 아주 훌륭합니다. 공연 연습하기 좋아요." },
    { id: 3, title: "선릉 보컬룸", content: "방음이 아주 잘 됩니다. 녹음하기 딱이에요." },
    { id: 4, title: "교대 댄스연습실", content: "바닥 상태가 너무 좋아서 무릎이 안 아파요." },
  ];

  // 지도 클릭 시 현재 위치 기반 구글 지도 연결
  const handleMapClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
        },
        () => {
          alert("위치 정보를 가져올 수 없어 기본 지도를 엽니다.");
          window.open(`https://www.google.com/maps`, '_blank');
        }
      );
    } else {
      alert("이 브라우저에서는 위치 서비스를 지원하지 않습니다.");
    }
  };

  return (
    <div className="s32-container">
      <HeaderSub03 onNavigate={onNavigate} />

      <main className="s32-main">
        <div className="s32-top-bar">
          <div className="s32-filters">
            <select className="s32-select wide">
              <option value="" disabled selected>지역별</option>
              <optgroup label="주요 연습실">
                <option>혜화</option>
                <option>건대, 한양대, 경희대 등 대학가</option>
                <option>홍대, 합정, 망원</option>
                <option>사당역(동작/관악 접점)</option>
                <option>프리미엄 연습실</option>
                </optgroup>
              <optgroup label="서울">
                <option>종로구, 중구, 용산구</option>
                <option>성동구, 광진구, 동대문구, 중랑구, 성북구, 강북구, 도봉구, 노원구</option>
                <option>마포구, 서대문구, 은평구</option>
                <option>양천구, 강서구, 구로구, 금천구, 영등포구, 동작구, 관악구</option>
                <option>강남구, 서초구, 송파구, 강동구</option>
              </optgroup>
              <optgroup label="경기">
                <option>경기도</option>
                </optgroup>
              <optgroup label="전국">
                <option>그 외</option>
              </optgroup>
            </select>

            <select className="s32-select wide">
              <option value="" disabled selected>인원별</option>
              <option>1인</option><option>2인</option><option>3인</option><option>4인</option><option>5인 이상</option>
            </select>

            <div className="s32-date-input wide">
              <input type="date" className="s32-date-picker" />
            </div>

            <button className="s32-btn-dark" onClick={() => setIsFilterOpen(true)}>필터</button>
            <button className="s32-btn-dark" onClick={handleMapClick}>지도</button>
          </div>

          {/* 필터 모달 */}
          {isFilterOpen && (
            <div className="s32-filter-overlay">
              <div className="s32-filter-modal">
                <div className="s32-filter-header">
                  <h3>상세 필터</h3>
                  <FaTimes className="s32-close-icon" onClick={() => setIsFilterOpen(false)} />
                </div>
                <div className="s32-filter-content">
                  <div className="s32-filter-group">
                    <h4>시설 및 서비스 옵션</h4>
                    <div className="s32-checkbox-grid">
                      <label><input type="checkbox" /> 댄스슈즈 가능</label>
                      <label><input type="checkbox" /> 전면 통유리</label>
                      <label><input type="checkbox" /> 충격흡수 바닥</label>
                      <label><input type="checkbox" /> 블루투스 스피커</label>
                      <label><input type="checkbox" /> 그랜드 피아노</label>
                      <label><input type="checkbox" /> 탈의실 완비</label>
                      <label><input type="checkbox" /> 무료 주차</label>
                      <label><input type="checkbox" /> 새벽 패키지</label>
                      <label><input type="checkbox" /> 보면대 대여</label>
                      <label><input type="checkbox" /> 와이파이</label>
                    </div>
                  </div>
                </div>
                <button className="s32-filter-apply-btn" onClick={() => setIsFilterOpen(false)}>선택 완료</button>
              </div>
            </div>
          )}

          <div className="s32-sub-nav-wrapper">
            <div className="s32-menu-tabs">
              {['전체', '시간', '일', '패키지'].map(menu => (
                <span 
                  key={menu} 
                  className={`s32-menu-item ${activeMenu === menu ? 'active' : ''}`}
                  onClick={() => setActiveMenu(menu)}
                >
                  {menu}
                </span>
              ))}
            </div>
            <select className="s32-sort-select">
              <option>가격 낮은 순</option>
              <option>가격 높은 순</option>
              <option>인기순</option>
              <option>리뷰 많은 순</option>
            </select>
          </div>
        </div>

        <section className="s32-grid-section">
          <div className="s32-grid">
            {spaceList.map((item) => (
              <div className="s32-card" key={item.id}>
                <div className="s32-card-img"><span className="s32-badge">HOT</span></div>
                <div className="s32-card-info">
                  <h3>{item.title}</h3>
                  <p className="s32-tags">{item.tags}</p>
                  <div className="s32-meta">
                    <span className="s32-price">{item.price} 원/시간</span>
                    <span className="s32-stats">💬 8 ❤️ 50</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="s32-recent-section">
          <h2 className="s32-section-title">최근 본 공간</h2>
          <div className="s32-recent-main-wrapper">
            <div className="s32-recent-left-grid">
              <div className="s32-box b1">
                <div className="s32-box-img"></div>
                <div className="s32-box-info">
                  <p className="s32-box-title">{recentReviews[activeTab].title}</p>
                  <p className="s32-box-price">5,000 원/시간</p>
                </div>
              </div>
              <div className="s32-box b2">
                <div className="s32-mini-review">
                  <p className="s32-review-text">"{recentReviews[activeTab].content}"</p>
                  <span className="s32-review-more">후기 더보기 &gt;</span>
                </div>
              </div>
              <div className="s32-box b3"></div>
              <div className="s32-box b4"></div>
            </div>

            <div className="s32-recent-right-list">
              {recentReviews.map((r, i) => (
                <div 
                  key={i} 
                  className={`s32-tab-item ${activeTab === i ? 'active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  <FaChevronLeft className="s32-active-icon" />
                  <span>{r.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <FooterSub03 />
    </div>
  );
};

export default Sub03_2;