import React from "react";
import { Link, useLocation } from "react-router-dom";

const PageHeader = ({ title, imageUrl }) => {
  const location = useLocation();

  // Function to replace hyphens with spaces
  const handleHyphenToSpace = (input) => {
    return input.replace(/-/g, " ");
  };

  // Extract the last part of the pathname and apply the transformation
  const currentPath = location.pathname.split("/").pop();
  const formattedPath = handleHyphenToSpace(currentPath);
  console.log(formattedPath);

  return (
    <div
      className="w-full mt-12 md:mt-0 h-[25vh] md:h-[70vh] flex justify-center items-center"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="w-full h-full flex flex-col items-center justify-center mt-5 md:mt-12">
          <h1 className="mr-0 md:mr-[110px] capitalize text-white text-3xl lg:text-6xl font-bold animate__animated animate__fadeInUp">
            {formattedPath ? formattedPath : title}
          </h1>
          <div className="animate__animated animate__fadeInUp mt-1 md:mt-2 mr-0 md:mr-[110px]">
            <Link to="/" className="text-white text-sm md:text-lg">
              Home
            </Link>
            <span className="text-cyan-500 capitalize">
              {" "}
              <i className="fa-solid fa-angles-right text-white"></i>{" "}
              {formattedPath}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
