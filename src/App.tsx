import React, { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Result from "./components/Results";

function App() {

  const [neck, setNeck] = useState("bend-backward");
  const [ears, setEars] = useState("default");
  const [accessories, setAccessories] = useState("flower");
  const [eyes, setEyes] = useState("angry");
  const [leg, setLeg] = useState("bubble-tea");
  const [mouth, setMouth] = useState("default");
  const [hair, setHair] = useState("bang");

  const setterFunctions = {
    neck: setNeck,
    ears: setEars,
    accessories: setAccessories,
    eyes: setEyes,
    leg: setLeg,
    mouth: setMouth,
    hair: setHair,
  };

  const alpaca = {
    neck,
    ears,
    accessories,
    eyes,
    leg,
    mouth,
    hair,
  };

  const styles = {
    neck: ["bend-backward", "bend-forward", "default", "thick"],
    ears: ["default", "tilt-backward", "tilt-forward"],
    accessories: ["earings", "flower", "glasses", "headphone"],
    eyes: ["angry", "default", "naughty", "panda", "smart", "star"],
    leg: [
      "bubble-tea",
      "cookie",
      "default",
      "game-console",
      "tilt-backward",
      "tilt-forward",
    ],
    mouth: ["astonished", "default", "eating", "laugh", "tongue"],
    hair: ["bang", "curls", "default", "elegant", "fancy", "quiff", "short"],
  };

  return (
    <div className="App">
      <body className="bg-red-400 text-white min-h-screen">
        <section id="header" className="p-10">
          <span className="text-4xl">ALPACA IMAGE GENERATOR</span>
        </section>
        <section id="content" className="grid grid-cols-2">
          <Result alpaca={alpaca} />
          <Controller
            setterFunctions={setterFunctions}
            styles={styles}
            alpaca={alpaca}
          />
        </section>
      </body>
    </div>
  );
}

export default App;
