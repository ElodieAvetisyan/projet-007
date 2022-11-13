import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Header from './components/Header'
import Error from './components/Error'
import Lodging from './pages/Lodging';
import Footer from './components/Footer';
import "./style/sass/main.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/lodging/:lodgingId" element={<Lodging />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);