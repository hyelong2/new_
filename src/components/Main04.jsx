import React, { useState } from 'react';
import './Main04.css';

const Main04 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSendMessage = (e) => {
    e.preventDefault();
    alert(`메시지가 전송되었습니다: ${message}`);
    setMessage('');
    setIsModalOpen(false);
  };

  return (
    <div id="contact">
      <section className="main04-container">
        <div className="contact-header">
          <h2 className="section-number">04</h2>
          <h1 className="section-title">CONTACT</h1>
        </div>

        <div className="contact-content-body">
          <div className="info-box">
            <div className="info-item">
              <span className="icon user-icon">👤</span>
              <span className="info-text">박혜린</span>
            </div>
            <div className="info-item">
              <span className="icon mail-icon">✉️</span>
              <span className="info-text">hye2lin@naver.com</span>
            </div>
          </div>

          <button className="dm-button" onClick={toggleModal}>
            Direct Message
          </button>
        </div>

        {/* 모달 팝업 */}
        {isModalOpen && (
          <div className="modal-overlay" onClick={toggleModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={toggleModal}>&times;</button>
              
              <div className="modal-header">
                <h3>Direct Message</h3>
              </div>
              
              <div className="modal-body">
                <p className="admin-msg">
                  안녕하세요! 박혜린입니다. <br/>
                  궁금한 점을 남겨주시면 확인 후 연락드리겠습니다.
                </p>
                <form onSubmit={handleSendMessage}>
                  <textarea 
                    placeholder="메시지를 입력하세요..." 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                  <button type="submit" className="send-btn">Send</button>
                </form>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Main04;