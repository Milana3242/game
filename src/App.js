import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Level from "./pages/Level";
import CategoryCards from "./pages/CategoryCards";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
          <Route path="сategory" element={<Category />} />
          <Route path="Level/:id" element={<Level />} />
          <Route path="CategoryCards/:id/:level" element={<CategoryCards />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
