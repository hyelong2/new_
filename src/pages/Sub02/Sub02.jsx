import React, { useState } from "react";
import Sub02_1 from "./components/Sub02_1.jsx"; // 경로가 같은 폴더일 때
import Sub02_2 from "./components/Sub02_2.jsx"; // 경로가 같은 폴더일 때

const Sub02 = () => {
  const [page, setPage] = useState(1);

  // 페이지 이동 함수
  const goToPage = (num) => {
    setPage(num);
    window.scrollTo(0, 0); 
  };

  return (
    <div className="App">
      {page === 1 && <Sub02_1 onNavigate={goToPage} />}
      {page === 2 && <Sub02_2 onNavigate={goToPage} />}
    </div>
  );
};

export default Sub02;