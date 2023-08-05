import blob1 from "./../../public/end.png";
import blob2 from "./../../public/blob_about.png";

const Form = () => {
  return (
    <div className="grid grid-cols-12 h-screen relative">
      <div className="col-start-2 col-end-7 self-center">
        <h1 className="text-bold text-2xl font-bold bb-16">
          Got a project in mind? Use the form to give me as much detail as
          possible and i`ii get back to you as soon as i can.
        </h1>
        <form action="">
          <input
            type="text"
            placeholder="Name"
            className="block w-full py-2 px-3 mb-4 rounded-md placeholder:font-semibold focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="block w-full py-2 px-3 mb-4 rounded-md placeholder:font-semibold focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
          <input
            type="text"
            placeholder="Project Details"
            className="block w-full pt-2 pb-40 px-3 mb-8 rounded-md placeholder:font-semibold focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
          <button className="py-2 px-4 bg-secondary rounded text-primary">
            Submit
          </button>
        </form>
      </div>

      <div className="col-start-10 col-end-12">
        <img src={blob1} alt="" className="absolute top-48" />
        <img src={blob2} alt="" />
      </div>
    </div>
  );
};

export default Form;
