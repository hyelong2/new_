import React, { useState } from "react";
// import Sub02_1 from "./components/Sub02_1.jsx";
// import Sub02_2 from "./components/Sub02_2.jsx";
// import Sub02_3 from "./components/Sub02_3.jsx";

const Sub02 = () => {
  const [page, setPage] = useState(1);

  const goToPage = (num) => {
    setPage(num);
  };

  return (
    <div className="App">
      {/* {page === 1 && <Sub02_1 onNavigate={goToPage} />}
      {page === 2 && <Sub02_2 onNavigate={goToPage} />}
      {page === 3 && <Sub02_3 onNavigate={goToPage} />} */}
    </div>
  );
};

export default Sub02;