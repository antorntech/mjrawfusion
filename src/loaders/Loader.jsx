import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div class="loader">
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
        <div class="slice"></div>
      </div>
    </div>
  );
};

export default Loader;
