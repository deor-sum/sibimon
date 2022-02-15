import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";
import HeroSlider from "./components/HeroSlider";
import NavbarMenu from "./components/NavbarMenu";
import Description from "./components/Description.jsx";
import Teams from "./components/Teams.jsx";
import Register from "./components/Register.jsx";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Testimoni from "./components/Testimoni";

const App = () => {
  return (
    <div className="App">
      <Container fluid className="px-0">
        <NavbarMenu />
        <HeroSlider />
        <Description />
        <Teams />
        <Register />
        <Faq />
        <Testimoni />
        <Footer />
      </Container>
    </div>
  );
};

export default App;
