import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Hero from "./Assets/hero";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
