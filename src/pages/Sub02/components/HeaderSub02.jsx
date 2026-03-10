import React, { useState } from 'react';
import './HeaderFooter02.css'; 

const HeaderSub02 = ({ tabs, activeTab, handleTabClick, categories, activeMenu, setActiveMenu, setActiveTab }) => {
  const [isCheckHovered, setIsCheckHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loginData, setLoginData] = useState({ id: '', pw: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginData.id && loginData.pw) {
      alert(`${loginData.id}님, 환영합니다!`); 
      setIsModalOpen(false);
    }
  };

  return (
    <header className="sub2-header">
      {/* 1층: 로고 및 유저 메뉴 */}
      <div className="header-row-top">
        <div className="header-inner">
          <div className="logo-area">
            <h1 className="logo-text">CURTAIN CALL</h1>
            <span className="logo-sub">예매</span>
          </div>
          <div className="user-menu">
            <a href="/login">로그인</a>
            <span className="divider">|</span>
            <a href="/my">MY</a>
            <span className="divider">|</span>
            
            <div 
              className="sub2-check-wrapper"
              onMouseEnter={() => setIsCheckHovered(true)}
              onMouseLeave={() => setIsCheckHovered(false)}
            >
              <span className="sub2-menu-link">예매확인</span>
              
              <div className={`sub2-dropdown-box ${isCheckHovered ? 'show' : ''}`}>
                <div className="sub2-dropdown-inner">
                  <div className="sub2-dropdown-item">
                    <span>회원 예매확인</span>
                    <span className="sub2-arrow">▶</span>
                  </div>
                  <div className="sub2-dropdown-item" onClick={() => { setIsModalOpen(true); setIsCheckHovered(false); }}>
                    <span>비회원 예매확인</span>
                    <span className="sub2-arrow">▶</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2층: 탭 + 카테고리 + 검색창 */}
      <div className="header-row-bottom">
        <div className="header-inner">
          <nav className="nav-combined">
            {/* 랭킹 탭 (이제 기본 검정색) */}
            <div className="nav-group tabs">
              {tabs.map((tab, idx) => (
                <button
                  key={`tab-${idx}`}
                  className={`nav-item tab-item ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => {
                    handleTabClick(idx);
                    setActiveMenu(null);
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* 카테고리 (뮤지컬, 연극...) */}
            <div className="nav-group categories">
              {categories.map((cat, idx) => (
                <button
                  key={`cat-${idx}`}
                  className={`nav-item cat-item ${activeMenu === idx ? 'active' : ''}`}
                  onClick={() => {
                    setActiveMenu(idx);
                    setActiveTab(null);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </nav>

          {/* 검색창 영역 */}
          <div className="search-area">
            <div className="search-input-wrapper">
              <input type="text" placeholder="검색어를 입력하세요" className="search-input" />
              <button className="search-btn">🔍</button>
            </div>
          </div>
        </div>
      </div>

      {/* 로그인 모달 */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-inner">
              <h2 className="modal-title">CURTAIN CALL</h2>
              <p className="modal-subtitle">커튼콜 계정으로<br/>보다 많은 혜택을 누리세요.</p>
              <hr className="modal-divider" />
              <form className="login-section" onSubmit={handleLoginSubmit}>
                <p className="section-label">로그인</p>
                <input type="text" name="id" placeholder="아이디(이메일)를 입력하세요." className="modal-input" value={loginData.id} onChange={handleInputChange} />
                <input type="password" name="pw" placeholder="비밀번호를 입력하세요." className="modal-input" value={loginData.pw} onChange={handleInputChange} />
                <button type="submit" className="login-submit-btn">로그인하기</button>
              </form>
              <hr className="modal-divider" />
              <div className="join-section">
                <p className="section-label">회원가입</p>
                <button type="button" className="email-join-btn">이메일/전화번호로 가입하기</button>
                <div className="sns-icons">
                  <div className="sns-icon kakao">TALK</div>
                  <div className="sns-icon naver">N</div>
                  <div className="sns-icon google">G</div>
                  <div className="sns-icon apple">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderSub02;