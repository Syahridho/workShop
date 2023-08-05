import blobHero1 from "./../../public/blob_hero1.png";
import blobHero2 from "./../../public/blob_hero2.png";

const Hero = () => {
  return (
    <div id="hero" className="text-center min-h-[70vh] py-36">
      <h3 className="font-semibold text-text text-xl">
        Hello my name is Syahridho
      </h3>
      <h1 className="font-bold text-4xl my-4">
        Freelance UI Designer & UX <br /> Designer
      </h1>
      <h3 className="font-semibold">
        I help business grow by crafting amazing web experiences. if you’re
        looking for <br /> a designer and developer that like to get stuff done.
        let’s talk
      </h3>
      <ul className="flex justify-center text-sm font-bold mt-12">
        <li className="mx-4">+628-2392-2512-58</li>
        <li className="mx-4">syahridhosyahputra@gmail.com</li>
        <li className="mx-4 underline hover:cursor-pointer hover:text-secondary">
          See my work
        </li>
      </ul>
      <img src={blobHero1} alt="" className="absolute top-20" />
      <img src={blobHero2} alt="" className="absolute right-16 top-28 w-28" />
    </div>
  );
};

export default Hero;
