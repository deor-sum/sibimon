import "./App.css";

import { Container } from "react-bootstrap";
import HeroSlider from "./components/HeroSlider";
import NavbarMenu from "./components/NavbarMenu";
import Description from "./components/Description.jsx";
const App = () => {
  return (
    <div className="App">
      <Container fluid className="px-0">
        <NavbarMenu />
        <HeroSlider />
        <Description />
      </Container>
    </div>
  );
};

export default App;
