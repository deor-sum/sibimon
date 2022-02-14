import "./App.css";
import NavbarMenu from "./components/NavbarMenu";
import { Container } from "react-bootstrap";
import HeroSlider from "./components/HeroSlider";
const App = () => {
  return (
    <div className="App">
      <Container fluid className="px-0">
        <NavbarMenu />

        <HeroSlider />
      </Container>
    </div>
  );
};

export default App;
