import instagram from "./../../public/instagram.png";
import facebook from "./../../public/facebook.png";
import twitter from "./../../public/twitter.png";

const Footer = () => {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-3 border-t-2 border-slade-800 py-2">
        <div className="self-center md:pe-2 md:order-last">
          <ul className="flex justify-center md:justify-end ">
            <li>
              <button>
                <img src={instagram} alt="" className="w-1/2" />
              </button>
            </li>
            <li>
              <button>
                <img src={facebook} alt="" className="w-1/2" />
              </button>
            </li>
            <li>
              <button>
                <img src={twitter} alt="" className=" w-1/2 text-red-500" />
              </button>
            </li>
          </ul>
        </div>
        <div className="text-xs self-center md:ps-10 md:text-start xl:ps-10 text-center">
          <p>Privacy Policy Terms & Conditions</p>
        </div>
        <div className="text-xs text-center self-center">
          <p>(c) Copyright ridho 2023. All right reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
