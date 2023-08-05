import client from "./../../public/client1.png";
import clientBrand from "./../../public/client2.png";

const Coment = () => {
  return (
    <div id="coment" className="mb-24">
      <h1 className="font-extrabold text-center text-md mt-10 mb-5">
        “Working with syahridho has been an absolute <br /> Pleasure and we’ll
        definitely turn to his
        <br /> experitise for new projects. ”
      </h1>
      <div className="flex justify-center mb-5">
        <div className="flex relative">
          <img src={client} alt="" />
          <img src={clientBrand} alt="" className="absolute ms-12 mt-4" />
        </div>
      </div>
      <h1 className="text-center font-bold">Ahmad Kanabawi</h1>
      <h1 className="text-center font-semibold text-text">
        Marketing Director at Apple
      </h1>
    </div>
  );
};

export default Coment;
