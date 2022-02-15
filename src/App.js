import "./App.css";
import { Container } from "react-bootstrap";
import HeroSlider from "./components/HeroSlider";
import NavbarMenu from "./components/NavbarMenu";
import Description from "./components/Description.jsx";
import Teams from "./components/Teams.jsx";
import Register from "./components/Register.jsx";
import Faq from "./components/Faq";

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
      </Container>
    </div>
  );
};

export default App;
