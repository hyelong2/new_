import React, { useState } from "react";
// import Sub03_1 from "./components/Sub03_1.jsx";
// import Sub03_2 from "./components/Sub03_2.jsx";
// import Sub03_3 from "./components/Sub03_3.jsx";

const Sub03 = () => {
  const [page, setPage] = useState(1);

  const goToPage = (num) => {
    setPage(num);
  };

  return (
    <div className="App">
      {/* {page === 1 && <Sub03_1 onNavigate={goToPage} />}
      {page === 2 && <Sub03_2 onNavigate={goToPage} />}
      {page === 3 && <Sub03_3 onNavigate={goToPage} />} */}
    </div>
  );
};

export default Sub03;