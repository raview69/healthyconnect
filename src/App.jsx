import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
// import Dashboard from "./components/dashboard/Dashboard";
// import TodoDetails from "./components/todo/TodoDetails";
import Home from "./pages/Home";
import About from "./pages/About";
import Pendaftaran from "./pages/Pendaftaran";
import FormPendaftaran from "./pages/FormPendaftaran";

function App() {
  return (
    <div
      // style={{
      //   background: "linear-gradient(180deg, #BFF7FF 0%, #FFF 95%)",
      // }}
      className="min-h-screen bg-[#E8F9FF]"
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/pendaftaran" element={<Pendaftaran />} />
        <Route exact path="/pendaftaran/:slug" element={<FormPendaftaran />} />
      </Routes>
    </div>
  );
}

export default App;
