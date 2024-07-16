import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";

function MainLayout(props) {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
