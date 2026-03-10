import React from 'react';
import './HeaderFooter03.css';

const HeaderSub03 = ({ onNavigate }) => {
  return (
    <header className="s3-common-header">
      <div className="s3-header-inner">
        <div className="s3-logo" onClick={() => onNavigate(1)}>
          RUN<span>THROUGH</span>
        </div>
        <div className="s3-user-nav">
          <span>로그인/회원가입</span>
          <span>MY</span>
        </div>
      </div>
    </header>
  );
};

export default HeaderSub03;