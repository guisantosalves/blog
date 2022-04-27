import Left from "./Left";
import Right from "./Right";
import NavbarComponent from "./Navbar";
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap";

//tem que botar sempre os links na pag html principal tmb, se n nao funciona
function App() {
  return (
    <>
      <NavbarComponent />
      <Container>
        <Row>
          <Left />
          <Right />
        </Row>
      </Container>
      <Container fluid>
        <Footer/>
      </Container>
      
    </>
  );
}

export default App;
