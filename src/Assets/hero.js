import React from "react";
import "./css/hero.css"
import photo from "./img/pic.png";
const Hero = () => {
  return (
    <>
      <section className="pt-48 min-h-screen">
        <div className="container px-56 ">
          <div className="text-green text-base sfmono-sb">Hi, my name is </div>
          <div className="text-llslate   calibre-sb text-8xl mt-8">
            Dhruv Aeron.
          </div>
          <div className="text-slate text-7xl  calibre-sb">
            I build things for the web.
          </div>
          <div className="text-slate text-xl w-7/12 leading-normal text-justify  calibre-reg mt-4">
            I’m a undergard at USICT, New Delhi specializing in building (and
            occasionally designing) Web experiences. Currently, I’m focused on
            exploring new Technological Areas.
          </div>
          <div className="mt-12">
            <a href={photo} download={photo} className="cv-a ">
              <button type="submit" className="cv-btn sfmono-sb">
                Resume!!
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero
