import React from 'react'
import "./App.css";
import { Routes, Route } from "react-router-dom";
import TopSection from './components/TopSection.jsx';
import SinglDatSo from "./components/SinglDatSo";
import Container from "./components/ONTAINER.jsx";

function App() {
  return (
    <div className=" selection:text-cyan-300 ">
      <div className="absolute top-0 z-[-2] h-full w-full bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
        <div className=" overflow-hidden antialiased">
        <TopSection />
          {/* router Dom */}
          <Routes>
            <Route path="/soloData" element={<SinglDatSo />} />
            <Route path="/" element={<Container />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
