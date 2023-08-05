import blob from "./../../public/blob_about.png";

const HeroContact = () => {
  return (
    <div className="grid grid-cols-12 content-center h-[80vh]">
      <div className="col-start-2 col-end-7 pb-10">
        <h3 className="font-bold text-2xl my-4">
          I`m currently available for freelance work.
        </h3>
        <h1 className="font-bold text-3xl">
          If you`re looking for a designer and develover that likes to get stuff
          done, let`s talk.
        </h1>
        <div className="mt-4">
          <button className="py-2 px-6 me-2 rounded font-semibold text-sm text-primary  bg-secondary transition-all shadow hover:shadow-xl hover:bg-green-500 ">
            WhatsApp
          </button>
          <button className="py-2 px-6 me-2 rounded border border-secondary font-semibold text-sm text-secondary transition-all shadow hover:bg-secondary hover:text-primary hover:shadow-xl">
            Email
          </button>
        </div>
      </div>
      <div className="col-start-11">
        <img src={blob} alt="" />
      </div>
    </div>
  );
};

export default HeroContact;
