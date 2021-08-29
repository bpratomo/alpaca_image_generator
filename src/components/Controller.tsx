import { useState } from "react";

export interface ControllerProps {
  setterFunctions: { [category: string]: (style: string) => void };
  styles: { [category: string]: string[] };
  alpaca: {[category:string]:string}
}

const Controller: React.FC<ControllerProps> = ({ setterFunctions, styles,alpaca }) => {
  const [selectedCategory, selectCategory] = useState(
    Object.keys(setterFunctions)[0]
  );

  const CategoryItems = Object.keys(setterFunctions).map((category) => (
    <div className={`${category===selectedCategory?"bg-blue-800":""} border rounded-2xl m-1 px-10 py-4 text-xl flex-grow text-center hover:bg-blue-500 `} onClick={()=>selectCategory(category)}>
      {category}
    </div>
  ));

  const CategoryStyles = styles[selectedCategory].map((style) => (
    <div className={`${style===alpaca[selectedCategory]?"bg-blue-800":""} border rounded-2xl m-1 px-8 py-4 text-xl flex-grow text-center hover:bg-blue-500`} onClick={() => setterFunctions[selectedCategory](style)}>
      {style}
    </div>
  ));

  return (
    <div id="controller" className="grid grid-rows-2 h-full p-5">
      <div id="category__selector" className="mb-6">
        <span className="text-xl">ACCESSORIZE THE ALPACAS</span>
        <div id="category__buttons" className="flex flex-row flex-wrap  my-3">
          {CategoryItems}
        </div>
      </div>
      <div id="item__selector">
        <span className="text-xl">STYLE</span>
        <div className="flex flex-row flex-wrap my-3">{CategoryStyles}</div>
      </div>
    </div>
  );
};

export default Controller;
