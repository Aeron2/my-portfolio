import React from "react";
import Hero from "./hero";
import Navbar from "./nav";
import Logos from "./logos";
import About from "./about";
const Home = () => {
    return (
        <>
            <Navbar/>
            <Hero />
            <Logos />
            <About/>
        </>
    );

};
export default Home;