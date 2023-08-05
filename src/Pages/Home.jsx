import Coment from "../Componets/Coment";
import Company from "../Componets/Company";
import Hero from "../Componets/Hero";
import Navigation from "../Componets/Navigation";
import Work from "../Componets/Work";
import End from "../Componets/End";
import Footer from "../Componets/Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Company />
      <Work />
      <Coment />
      <hr />
      <End />
      <Footer />
    </>
  );
};

export default Home;
