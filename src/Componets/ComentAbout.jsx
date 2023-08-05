import client from "./../../public/client1.png";
import clientbrand from "./../../public/client2.png";

const ComentAbout = () => {
  return (
    <div className="flex justify-center mx-24 py-20">
      <div className="shadow border border-3 border-slate-300 mx-5 pb-10 py-5 flex flex-col text-center">
        <h1 className="font-bold text-sm p-8">
          “Working with syahridho has been an absolute Pleasure and we’ll
          definitely turn to his experitise for new projects. ”
        </h1>
        <img src={client} alt="" className="w-20 self-center" />
        <img
          src={clientbrand}
          alt=""
          className="w-12 self-center -mt-16 ms-16"
        />
        <h2 className="text-sm font-bold mt-6 text-heading">Ahmad Kanabawi</h2>
        <p className="text-sm font-bold text-text">
          Marketing Director at Apple
        </p>
      </div>
      <div className="shadow border border-3 border-slate-300 mx-5 pb-10 py-5 flex flex-col text-center">
        <h1 className="font-bold text-sm p-8">
          “Working with syahridho has been an absolute Pleasure and we’ll
          definitely turn to his experitise for new projects. ”
        </h1>
        <img src={client} alt="" className="w-20 self-center" />
        <img
          src={clientbrand}
          alt=""
          className="w-12 self-center -mt-16 ms-16"
        />
        <h2 className="text-sm font-bold mt-6 text-heading">Ahmad Kanabawi</h2>
        <p className="text-sm font-bold text-text">
          Marketing Director at Apple
        </p>
      </div>
    </div>
  );
};

export default ComentAbout;
