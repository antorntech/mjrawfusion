import React from "react";

const WelcomeText = () => {
  return (
    <div className="px-5 py-[20px] md:py-[80px] lg:py-[100px]">
      <div className="max-w-screen-xl mx-auto">
        <img
          src="/images/welcome-text.png"
          alt="welcome-text"
          className="mx-auto"
        />
        <p className="text-md md:text-lg text-center mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores eius
          ipsam perspiciatis voluptatibus veritatis cum ducimus est tenetur?
          Possimus et minus cumque unde earum blanditiis at labore molestias,
          incidunt aliquam aut expedita sed recusandae odio autem est voluptas
          pariatur natus odit? Ratione sapiente neque nihil illum qui, ducimus
          quod amet.
        </p>
      </div>
    </div>
  );
};

export default WelcomeText;
