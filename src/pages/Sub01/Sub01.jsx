import React, { useState } from "react";
import Sub01_1 from "./components/Sub01_1.jsx";
import Sub01_2 from "./components/Sub01_2.jsx";
import Sub01_3 from "./components/Sub01_3.jsx";
import Sub01_4 from "./components/Sub01_4.jsx";

const App = () => {
  const [page, setPage] = useState(1);

  const goToPage = (num) => {
    setPage(num);
  };

  return (
    <div className="App">
      {page === 1 && <Sub01_1 onNavigate={goToPage} />}
      {page === 2 && <Sub01_2 onNavigate={goToPage} />}
      {page === 3 && <Sub01_3 onNavigate={goToPage} />}
      {page === 4 && <Sub01_4 onNavigate={goToPage} />}
    </div>
  );
};

export default App;