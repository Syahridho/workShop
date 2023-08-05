import blob from "./../../public/blob_about.png";

const Contract = () => {
  return (
    <div className="grid grid-cols-12 bg-orange-100">
      <div className="col-start-2 col-end-6">
        <img src={blob} alt="" />
      </div>
      <div className="col-start-7 col-end-12 self-center">
        <h1 className="text-heading font-bold text-xl">
          Before sending me a messege, here are some things you should know;
        </h1>
        <ul className="text-text font-semibold my-8">
          <li>+ What timezone are you in?</li>
          <li>- Do we make a contract?</li>
          <li>+ How much do you charge for a website?</li>
          <li>- Do you charge by the hour?</li>
        </ul>
        <p className="text-heading font-semibold">
          I do not charge by the hour, I prefer to eleminate the stress of
          counting the hours. Insteand, I charge a flat fee per project,
          regardless of duration.
        </p>
        <h5 className="font-semibold mt-2">+ Are you working with a team?</h5>
      </div>
    </div>
  );
};

export default Contract;
