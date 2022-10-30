import React from "react";
import { Link } from "react-router-dom";
import "./css/nav.css";
import logo from "./img/logo-2.png";

const Navbar = () => {
  return (
    <>
      <section className="fixed w-screen">
        <div className="flex navbar pl-8 pr-12 ">
          <div>
            <Link to="/">
              <img src={logo} alt="dhruv aeron logo" className="h-20" />
            </Link>
          </div>
          <div className="flex  items-center sfmono-med">
            <div className="flex gap-2 text-xs px-5">
              <div className="text-green">01.</div>
              <div className="text-white hover:text-green">About</div>
            </div>
            <div className="flex gap-2 text-xs px-5">
              <div className="text-green">02.</div>
              <div className="text-white hover:text-green">Experience</div>
            </div>
            <div className="flex gap-2 text-xs px-5">
              <div className="text-green">03.</div>
              <div className="text-white hover:text-green">Work</div>
            </div>
            <div className="flex gap-2 text-xs px-5">
              <div className="text-green">04.</div>
              <div className="text-white hover:text-green">Contact</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
