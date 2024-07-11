import React from "react";
import { Link } from "react-router-dom";


function Home(props) {
  return (
    <div className="form">
     <Link to={'/сategory'}><h1>START</h1></Link>
    </div>

  );
}

export default Home;
