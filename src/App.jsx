import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main01 from "./components/Main01.jsx";
import Main02 from "./components/Main02.jsx";
import Main03 from "./components/Main03.jsx";
import Main04 from "./components/Main04.jsx";


import Sub01 from "./pages/Sub01/Sub01.jsx"; 
import Sub02 from "./pages/Sub02/Sub02.jsx";
import Sub03 from "./pages/Sub03/Sub03.jsx";

import "./App.css";

const Home = () => (
  <div className="App">
    <Main01 />
    <Main02 />
    <Main03 />
    <Main04 />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub1" element={<Sub01 />} />
        <Route path="/sub2" element={<Sub02 />} />
        <Route path="/sub3" element={<Sub03 />} />
      </Routes>
    </Router>
  );
}

export default App;