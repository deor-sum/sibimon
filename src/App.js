import "./App.css";
import NavbarMenu from "./components/NavbarMenu";
import { Container } from "react-bootstrap";
const App = () => {
  return (
    <div className="App">
      <Container fluid>
        <NavbarMenu />
      </Container>
    </div>
  );
};

export default App;
