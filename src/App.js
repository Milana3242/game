import React from 'react';
import './App.css';
import Home from './pages/Home';
import Category from './pages/Category';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Level from './pages/Level';
import CategoryCards from './pages/CategoryCards';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Category" element={<Category />} />
          <Route path="/Level/:id" element={<Level />} />
          <Route path="/CategoryCards/:id/:level" element={<CategoryCards />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
