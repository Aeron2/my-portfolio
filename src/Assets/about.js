import React from "react";
import photo from "./img/my-photo.jpeg";

import "./css/about.css";

const About = () => {
  return (
    <>
      <section className="container px-48 pt-56 mx-auto text-slate min-h-screen">
        <div>
          <div className="flex flex-row gap-4">
            <div className="sfmono-sb text-green text-2xl">01.</div>
            <div className="text-llslate calibre-sb text-4xl">About Me</div>
            <div className="ht"></div>
          </div>
          <div className="flex flex-row gap-16 calibre-reg leading-normal text-xl">
            <div className="basis-3/4  text-justify">
              <div className="mt-8">
                Hello! My name is Dhruv and I enjoy creating things that live on
                the internet. My interest in web development started back in
                2021 when I decided to try inspect button the very first time
                and thats how my journey started towards HTML & CSS!
              </div>

              <div>
                I am currently in a stage of learning and on the path of
                becoming future{" "}
                <div className="hover:text-green">
                  Software Development Engineer.
                </div>
              </div>
              <div>
                <div>
                  Here are a few technologies I’ve been working with recently:
                </div>
                <ul className="grid grid-cols-2">
                  <li className="flex gap-2">
                    <div className="text-green">&#8709;</div> HTML & CSS
                  </li>
                  <li className="flex gap-2">
                    {" "}
                    <div className="text-green">&#8709;</div> Javascript
                  </li>
                  <li className="flex gap-2">
                    {" "}
                    <div className="text-green">&#8709;</div> Node Js
                  </li>
                  <li className="flex gap-2">
                    {" "}
                    <div className="text-green">&#8709;</div> React Js
                  </li>
                  <li className="flex gap-2">
                    {" "}
                    <div className="text-green">&#8709;</div> C/C++
                  </li>
                  <li className="flex gap-2">
                    {" "}
                    <div className="text-green">&#8709;</div> Python
                  </li>
                </ul>
              </div>
            </div>
            <div className="basis-1/4  my-photo-border mt-8">
              <img src={photo} alt="my-phot" className="my-photo " />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
