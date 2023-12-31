import React from "react";

/* Use this trick to easily import components and containers directly 
into our React app*/
import { CTA, Brand, Navbar } from "./components";
import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGPT3,
  Header,
} from "./containers";
import "./App.css";

// Typing 'rafce' generates a React functional component
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
