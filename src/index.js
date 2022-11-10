import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Header from './components/Header'
import Error from './components/Error'
import "./style/sass/main.scss"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageHebergement from './pages/PageHebergement';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/Hebergement/:id" element={<PageHebergement />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);