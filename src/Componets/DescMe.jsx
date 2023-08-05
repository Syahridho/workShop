import blob from "./../../public/blob_about.png";

const DescMe = () => {
  return (
    <div className="flex items-center justify-center mx-24 h-[90vh]">
      <div className="basis-1/2">
        <h1 className="text-3xl font-bold text-heading mb-4">
          Hello i`m <br />
          <span className="text-secondary">Syahridho Arjuna Syahputra</span>
        </h1>
        <p className="text-text font-semibold">
          I was born in Pekanbaru, Indonesia almost 19 years ago. From an early
          age I showed interest for{" "}
          <span className="text-secondary">computers</span> and that grew into a
          passion during high school. <br /> <br /> I got into{" "}
          <span className="text-secondary">
            web design and development in college
          </span>
          . Attending the Lancang Kuning University in Pekanbaru was the best
          decision I ever made because it showed me what I wanted to do for the
          rest of my life.
          <br />
          <br /> Currently I help businesses all around the world by{" "}
          <span className="text-secondary">
            designing and coding websites and mobile apps
          </span>{" "}
          .
          <br /> <br /> I had the pleasure of working with big companies like
          Google, Windows, Apple, and Paypal, just to name a few.
          <br />
          <br /> Right now i’m based in Pekanbaru.
        </p>
      </div>
      <div className="basis-1/2 self-center">
        <img src={blob} alt="" className="w-92 mx-auto" />
      </div>
    </div>
  );
};

export default DescMe;
