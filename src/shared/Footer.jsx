import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Footer = () => {
  const year = new Date().getFullYear();
  const [email, setEmail] = React.useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    toast.success("Thank you for subscribing to our newsletter!", {
      autoClose: 1000,
    });
    setEmail("");
  };
  return (
    <>
      <div className="bg-black px-5 py-5 md:py-12">
        <div className="max-w-screen-xl mx-auto py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="w-full flex flex-col items-center md:items-start">
              <img src="/images/logo-light.png" alt="" width={200} />
              <p className="text-white my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                asperiores, adipisci voluptas perferendis voluptatum illum vero,
                placeat voluptate delectus a qui numquam.
              </p>
              <div className="flex items-center gap-3">
                <Link className="border-2 border-white rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500">
                  <i class="fa-brands fa-facebook-f text-white text-lg"></i>
                </Link>
                <Link className="border-2 border-white rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500">
                  <i class="fa-brands fa-linkedin-in text-white text-lg"></i>
                </Link>
                <Link className="border-2 border-white rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500">
                  <i class="fa-brands fa-youtube text-white text-lg"></i>
                </Link>
                <Link className="border-2 border-white rounded-md w-10 h-10 flex justify-center items-center hover:border-[#04cafb] hover:bg-gradient-to-l hover:from-[#04cafb] hover:to-[#039dda] transition-all duration-500">
                  <i class="fa-brands fa-x-twitter text-white text-lg"></i>
                </Link>
              </div>
            </div>
            <div>
              <div>
                <h2 className="text-white text-xl md:text-3xl">Get in touch</h2>
                <div className="w-20 h-1 bg-white mt-2"></div>
              </div>
              <ul className="mt-5 flex flex-col gap-4">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-white"></div>
                  <span className="text-white">
                    +88-01601-900949 / +88-01920-810804
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-white"></div>
                  <span className="text-white">mj.rawfusion@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-white"></div>
                  <span className="text-white">
                    158/1, Rayerbazar, Hazaribagh, Dhaka-1209 Bangladesh
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-white"></div>
                  <Link
                    to="/privacypolicy"
                    className="text-white hover:text-[#04cafb] transition-all duration-500"
                  >
                    Privacy and Policy
                  </Link>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-[1px] bg-white"></div>
                  <Link
                    to="/termscondition"
                    className="text-white hover:text-[#04cafb] transition-all duration-500"
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <div>
                <h2 className="text-white text-xl md:text-3xl">News Letter</h2>
                <div className="w-20 h-1 bg-white mt-2"></div>
                <p className="text-white mt-5">
                  Stay up to date with the latest news, announcements and
                  articles.
                </p>
              </div>
              <div className="mt-5">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full p-2 border-[3px] border-[#04cafb] focus:outline-none focus:ring-[3px] focus:ring-transparent focus:border-[3px]"
                />
                <button
                  onClick={handleSubscribe}
                  className="mt-3 uppercase px-4 py-3 text-[16px] bg-gradient-to-l from-[#04cafb] to-[#039dda] text-white w-full shadow-lg"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-l from-[#04cafb] to-[#039dda]">
        <p className="text-white text-sm text-center p-5">
          Copyright © {year} mjrawfusion.com – All Rights Reserved | Designed
          and Developed By <i class="fa fa-heart"></i> PeopleNTech
        </p>
      </div>
    </>
  );
};

export default Footer;
