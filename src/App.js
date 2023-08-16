import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./componants/Header";
import "./styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
