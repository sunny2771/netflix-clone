import React from "react";
import "../App.css";
import { FcDeleteRow } from "react-icons/fc";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-maindiv">
      <div className="error-div1">
        <span>
         <span className="deleteicon"> <FcDeleteRow /></span>  No Data Found.
        </span>
       <br />
      <span>
         <Link to={"/"}>CLICK HERE</Link> to go to the home page.
        </span> 
      </div>
    </div>
  );
};

export default Error;
