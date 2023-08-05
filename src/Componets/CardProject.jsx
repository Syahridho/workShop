import about1 from "./../../public/about_1.png";
import about2 from "./../../public/about_2.png";
import about3 from "./../../public/about_3.png";

const CardProject = () => {
  return (
    <div className="flex mx-44 mb-20 ">
      <div className="basis-1/3 mx-10">
        <img src={about1} alt="" className="" />
      </div>
      <div className="basis-1/3 mx-10">
        <img src={about2} alt="" className="" />
      </div>
      <div className="basis-1/3 mx-10">
        <img src={about3} alt="" className="" />
      </div>
    </div>
  );
};

export default CardProject;
