import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Hero from "./Assets/hero";
import Navbar from "./Assets/nav";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Hero />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
