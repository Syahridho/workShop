import CardProject from "../Componets/CardProject";
import ComentAbout from "../Componets/ComentAbout";
import DescMe from "../Componets/DescMe";
import Navigation from "../Componets/Navigation";
import ProjectSize from "../Componets/ProjectSize";
import Tools from "../Componets/Tools";
import Footer from "../Componets/Footer";
import End from "../Componets/End";

const About = () => {
  return (
    <>
      <Navigation />
      <DescMe />
      <CardProject />
      <ProjectSize />
      <ComentAbout />
      <Tools />
      <End />
      <Footer />
    </>
  );
};

export default About;
