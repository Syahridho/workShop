import google from "./../../public/google.png";
import apple from "./../../public/apple.png";
import paypal from "./../../public/paypal.png";
import windows from "./../../public/windows.png";

const Company = () => {
  return (
    <div id="company" className="-mt-52">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="top-0"
      >
        <path
          fill="#ff8e3c"
          d="M0,160L26.7,154.7C53.3,149,107,139,160,138.7C213.3,139,267,149,320,176C373.3,203,427,245,480,234.7C533.3,224,587,160,640,133.3C693.3,107,747,117,800,149.3C853.3,181,907,235,960,261.3C1013.3,288,1067,288,1120,266.7C1173.3,245,1227,203,1280,165.3C1333.3,128,1387,96,1413,80L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
      <h1 className="text-center text-primary font-semibold bg-secondary">
        I had the pleasure if working with these awesome companies
      </h1>
      <ul className="bg-secondary flex justify-center py-10">
        <li className="mx-4">
          <img src={google} alt="" />
        </li>
        <li className="mx-4">
          <img src={windows} alt="" />
        </li>
        <li className="mx-4">
          <img src={apple} alt="" />
        </li>
        <li className="mx-4">
          <img src={paypal} alt="" />
        </li>
      </ul>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#ff8e3c"
          d="M0,192L26.7,208C53.3,224,107,256,160,272C213.3,288,267,288,320,266.7C373.3,245,427,203,480,165.3C533.3,128,587,96,640,74.7C693.3,53,747,43,800,53.3C853.3,64,907,96,960,106.7C1013.3,117,1067,107,1120,96C1173.3,85,1227,75,1280,80C1333.3,85,1387,107,1413,117.3L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Company;
