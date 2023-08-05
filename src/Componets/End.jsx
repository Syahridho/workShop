import blobEnd from "./../../public/end.png";

const End = () => {
  return (
    <div id="end" className="flex flex-row px-24 pb-32 my-20">
      <div className="basis-3/4 font-bold">
        <h1 className="mb-4 text-2xl">
          i’m currently available for freelance work.
        </h1>
        <h1 className="text-2xl mb-6">
          If you’re looking for a designer <br /> and develover that likes to
          get <br /> stuff done, let’s talk.
        </h1>
        <button className="underline">
          Got a project in mind? Let`s talk!
        </button>
      </div>
      <div className="basis-1/3">
        <ul className="font-semibold">
          <li>syahridhosyahputra@gmail.com</li>
          <li>+628-2392-2512-58</li>
        </ul>
      </div>
      <img src={blobEnd} alt="" className="absolute right-10 mt-32" />
    </div>
  );
};

export default End;
