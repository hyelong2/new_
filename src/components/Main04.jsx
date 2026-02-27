import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // 이메일 전송을 도와주는 라이브러리
import { useRef } from 'react'; // HTML 요소(여기서는 폼)를 선택할 때 사용하는 리액트 도구
import './Main04.css';

const Main04 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const form = useRef(); // 1. 폼 요소를 담을 변수(상자)를 만듭니다.

  // 2. '이메일 보내기' 버튼을 눌렀을 때 실행될 함수입니다.
  const onSendForm = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지가 새로고침 되는 것을 막아줍니다.

    // 3. emailjs 라이브러리를 사용해 실제로 이메일을 보냅니다.
    emailjs
      .sendForm(
        'service_4fj1tri', // EmailJS 웹사이트에서 받은 '서비스 ID'
        'template_kw19dpt', // EmailJS 웹사이트에서 받은 '템플릿 ID'
        form.current, // 현재 작성된 폼의 내용 (이름, 이메일, 메시지 등)
        {
          publicKey: 'FI5GytCz19ssf06P1', // 내 계정임을 증명하는 '공개 키'
        },
      )
      .then(
        () => {
          // 전송에 성공했을 때 실행되는 부분
          console.log('성공!'); // 개발자 도구 콘솔에 기록
          alert('이메일이 성공적으로 전송되었습니다.');
        },
        (error) => {
          // 전송에 실패했을 때 실행되는 부분
          console.log('실패...', error.text); // 에러 내용을 콘솔에 기록
          alert('이메일 전송에 실패했습니다.');
        },
      );
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
                 <form ref={form} onSubmit={onSendForm}>
                      {/* name="name": 이 이름표가 EmailJS 템플릿의 변수명과 같아야 내용이 들어갑니다. */}

                      <div>
                        <input className="name-input"
                        name="name" required 
                        placeholder="회사명을 적어주세요." />
                      </div>

                      <div>
                        <input className="email-input"
                          type="email"
                          required
                          name="email"
                          placeholder="이메일을 적어주세요."
                        />
                      </div>
                      <div>
                        <textarea className="message-input"
                          name="message"
                          required
                          placeholder="메일 내용을 적어주세요."
                        />
                      </div>
                      <button className="send-btn" type="submit">Send</button>
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