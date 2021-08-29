import React, { useState } from "react";
  import logo from "./logo.svg";
import "./App.css";
import Controller from "./components/Controller";

function App() {

  const BASE_IMAGE_LOCATION = "./assets/alpaca"


  const [background,setBackground] = useState("blue50")
  const [neck, setNeck] = useState("bend-backward");
  const [ears, setEars] = useState("default")
  const [accessories, setAccessories] = useState("flower");
  const [eyes, setEyes] = useState("angry");
  const [leg, setLeg] = useState("bubble-tea");
  const [mouth, setMouth] = useState("default");
  const [hair, setHair] = useState("bang");

 const setterFunctions = 
 {
   "neck":setNeck,
   "ears":setEars,
   "accessories":setAccessories,
   "eyes":setEyes,
   "leg":setLeg,
   "mouth":setMouth,
   "hair":setHair
 }

 const alpaca = {
  neck,
  ears,
  accessories,
  eyes,
  leg,
  mouth,
  hair,
 }

 const styles = 
 {
  "neck":["bend-backward","bend-forward","default","thick"],
  "ears":["default","tilt-backward","tilt-forward"],
  "accessories":["earings","flower","glasses","headphone"],
  "eyes":["angry","default","naughty","panda","smart","star"],
  "leg":["bubble-tea","cookie","default","game-console","tilt-backward","tilt-forward"],
  "mouth":["astonished","default","eating","laugh","tongue"],
  "hair":["bang","curls","default","elegant","fancy","quiff","short"]
}




  

  return (
  <div className="App">
  <body className="bg-red-400 text-white min-h-screen">
    <section id="header" className="p-10">
      <span className="text-4xl">ALPACA IMAGE GENERATOR</span>
    </section>
    <section id="content" className="grid grid-cols-2">
      <div id="result" className="p-5 flex flex-col flex-auto center">
        <div id="image" className="relative h-full max-h-96 w-full flex flex-row justify-center ">
          <img className="absolute max-h-full " src="src/assets/alpaca/backgrounds/blue50.png" alt="" />
          <img className="absolute max-h-full " src="src/assets/alpaca/neck/bend-backward.png" alt="" />
          <img className="absolute max-h-full " src="src/assets/alpaca/accessories/flower.png" alt="" />
          <img className="absolute max-h-full " src="src/assets/alpaca/eyes/angry.png" alt="" />
          <img className="absolute max-h-full " src="src/assets/alpaca/leg/bubble-tea.png" alt=""/>
          <img className="absolute max-h-full " src="src/assets/alpaca/mouth/default.png" alt="" />
          <img className="absolute max-h-full " src="src/assets/alpaca/nose.png" alt="" />
          <img className="absolute max-h-full " src="src/assets/alpaca/hair/bang.png" alt="" />
        </div>
        <div id="image_buttons" className="grid grid-cols-2 my-10">
          <div className="flex flex-row justify-center"><button className="border bg-yellow-500 w-40 text-white p-3">Download</button></div>
          <div className="flex flex-row justify-center"><button className="border bg-yellow-500 w-40 text-white p-3">Randomize</button></div>
        </div>
      </div>
<Controller setterFunctions={setterFunctions} styles={styles} alpaca={alpaca} />
    </section>
  </body>

  </div>);
}

export default App;
