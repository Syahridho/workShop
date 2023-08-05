import work1 from "./../../public/blob_work1.png";
import work2 from "./../../public/blob_work2.png";
import wave1 from "./../../public/rectangle1.png";
import wave2 from "./../../public/rectangle2.png";

const Work = () => {
  return (
    <div id="work" className="text-center relative pb-96 -mt-20">
      <h1 className="text-heading text-2xl font-semibold">My Work</h1>
      <p className="text-text font-semibold">
        I have worked on several projects from various countries <br /> for ui
        design and ux designer.
      </p>
      <img src={work1} alt="" />
      <img src={work2} alt="" className="w-32 absolute left-20" />
      <img src={wave1} alt="" className="w-80 absolute top-40 right-80 z-[2]" />
      <img src={wave2} alt="" className="absolute w-52 right-36 top-20" />
    </div>
  );
};

export default Work;
