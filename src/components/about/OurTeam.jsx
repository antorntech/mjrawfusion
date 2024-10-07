import React from "react";

const OurTeam = () => {
  return (
    <div
      className="px-5 md:px-0"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div className="col-span-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-5 uppercase">
              Our Team
            </h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
              numquam quas reprehenderit facere, fuga consectetur iusto error
              odio nemo voluptatibus totam officiis, accusamus corporis nobis
              soluta obcaecati necessitatibus quos nam laborum impedit
              laboriosam. Id, autem magnam! Fugit commodi dolorem harum qui
              optio neque rerum ipsum omnis porro voluptates ad aut maiores,
              enim dignissimos ipsa quae explicabo dicta, tempora cum veniam,
              recusandae cupiditate! Assumenda, dolor modi. Impedit deleniti,
              explicabo dolorem illo hic totam corporis soluta voluptatem qui
              maxime distinctio ipsa cupiditate aliquam libero eius saepe veniam
              nemo aperiam rerum consectetur ex! Perferendis corporis iusto
              corrupti. Quod repellendus eos error corporis ipsam.
            </p>
          </div>
          <div className="col-span-1">
            <img
              src="/images/team.jpg"
              alt="team"
              className="shadow-lg rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
