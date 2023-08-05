import { useState } from "react";

const Tools = () => {
  const [Design, setDesign] = useState(true);
  const [Develop, setDevelop] = useState(false);

  const activeDesign = () => {
    if (Design == false) {
      setDesign(!Design);
      setDevelop(!Develop);
    }
  };

  const activeDevelop = () => {
    if (Develop == false) {
      setDevelop(!Develop);
      setDesign(!Design);
    }
  };

  const btnDesign = Design ? "border border-slate-500" : "";
  const btnDevelop = Develop ? "border border-slate-500" : "";

  const liDesign = Design ? "" : "hidden";
  const liDevelop = Develop ? "" : "hidden";

  return (
    <div>
      <div className="grid grid-cols-4 ">
        <button
          onClick={activeDesign}
          className={`${btnDesign} col-start-2 rounded px-4 py-3 mx-2 my-1 font-bold text-heading text-xs hover:shadow`}
        >
          Tools i use for Design
        </button>
        <button
          onClick={activeDevelop}
          className={`${btnDevelop} rounded px-4 py-3 mx-2 my-1 font-bold text-heading text-xs hover:shadow`}
        >
          Tools i use for Development
        </button>
      </div>
      <div>
        <div className={`${liDesign}`}>
          <ul className="flex  justify-center my-8">
            <li className="rounded font-bold py-2 px-3 text-xs bg-tools mx-2">
              Figma
            </li>
            <li className="rounded font-bold py-2 px-3 text-xs bg-tools mx-2">
              Adobe Photoshop
            </li>
            <li className="rounded font-bold py-2 px-3 text-xs bg-tools mx-2">
              Adobe XD
            </li>
          </ul>
        </div>
        <div className={`${liDevelop}`}>
          <ul className="flex justify-center my-8">
            <li className="rounded font-bold py-2 px-3 text-xs bg-tools mx-2">
              HTML
            </li>
            <li className="rounded font-bold py-2 px-3 text-xs bg-tools mx-2">
              CSS
            </li>
            <li className="rounded font-bold py-2 px-3 text-xs bg-tools mx-2">
              JavaScript
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tools;
