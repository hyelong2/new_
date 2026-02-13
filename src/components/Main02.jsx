import React from 'react';
import './Main02.css';

const Main02 = () => {
  return (
  <div id="profile">
    <div className="main02-container">
      {/* 배경 상단 숫자 */}
      <div className="bg-number-top">02</div>

      <div className="slate-wrapper">
        {/* 슬레이트 바 */}
        <div className="slate-bar">
          <div className="pattern-group">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="clapper-pattern"></div>
            ))}
          </div>
        </div>

        {/* 슬레이트 몸체 */}
        <div className="slate-body">
          <h2 className="profile-main-title">Park Hye Lin PROFILE</h2>

          {/* 상단 3칸 섹션 */}
          <div className="info-grid-top">
            <div className="grid-box">
              <h3 className="yellow-label">INTRO</h3>
              <p className="white-text">
                "Welcome to my Stage.<br />
                Ready, Action!"
              </p>
            </div>
            <div className="grid-box">
              <h3 className="yellow-label">ME</h3>
              <p className="white-text">
                "무대 위의 몰입감을 웹 위로,<br />
                사용자의 마음을 연기하는<br />
                디자이너 박혜린입니다."
              </p>
            </div>
            <div className="grid-box">
              <h3 className="yellow-label">GitHub</h3>
              <div className="github-content">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github" />
              </div>
            </div>
          </div>

          {/* 하단 상세 섹션 */}
          <div className="info-grid-bottom">
            <div className="bottom-left">
              <div className="detail-row">
                <span className="yellow-label">Design</span>
                <span className="white-text-right">Photoshop, Illustrator, Figma</span>
              </div>
              <div className="detail-row">
                <span className="yellow-label">Dev</span>
                <span className="white-text-right">HTML5, CSS3(SCSS),<br />JavaScript(ES6+), jQuery</span>
              </div>
              <div className="detail-row no-border">
                <span className="yellow-label">INFO</span>
                <span className="white-text-right">
                  생년월일 2002.07.01<br />
                  이메일 hye2lin@naver.com<br />
                  거주지 서울시 관악구
                </span>
              </div>
            </div>

            <div className="bottom-right">
              <div className="detail-row flex-start">
                <span className="yellow-label">Education</span>
                <p className="white-text-right">
                  충북여자 고등학교<br />
                  중부대학교 연극영화학과<br />
                  MBC 아카데미 수료
                </p>
              </div>
              <div className="detail-row no-border">
                <span className="yellow-label">Others</span>
                <span className="white-text-right">영화심리상담가 자격증</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Main02;