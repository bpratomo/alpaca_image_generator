export interface ResultProps {
    alpaca: {[category:string]:string}
}
 
const Result: React.FC<ResultProps> = ({alpaca}) => {



    return (
    <div id="result" className="p-5 flex flex-col flex-auto center">
        <div id="image" className="relative h-full max-h-96 w-full flex flex-row justify-center ">
          <img className="absolute max-h-full " src="/alpaca/backgrounds/blue50.png" alt="" />
          <img className="absolute max-h-full " src={`/alpaca/ears/${alpaca["ears"]}.png`} alt="" />
          <img className="absolute max-h-full " src={`/alpaca/neck/${alpaca["neck"]}.png`} alt="" />
          <img className="absolute max-h-full " src={`/alpaca/accessories/${alpaca["accessories"]}.png`} alt="" />
          <img className="absolute max-h-full " src={`/alpaca/eyes/${alpaca["eyes"]}.png`} alt="" />
          <img className="absolute max-h-full " src={`/alpaca/leg/${alpaca["leg"]}.png`} alt=""/>
          <img className="absolute max-h-full " src="/alpaca/nose.png" alt="" />
          <img className="absolute max-h-full " src={`/alpaca/mouth/${alpaca["mouth"]}.png`} alt="" />
          <img className="absolute max-h-full " src={`/alpaca/hair/${alpaca["hair"]}.png`} alt="" />
        </div>
        <div id="image_buttons" className="grid grid-cols-2 my-10">
          <div className="flex flex-row justify-center"><button className="border bg-yellow-500 w-40 text-white p-3">Download</button></div>
          <div className="flex flex-row justify-center"><button className="border bg-yellow-500 w-40 text-white p-3">Randomize</button></div>
        </div>
      </div> );
}
 
export default Result;