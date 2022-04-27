import Left from "../../Left";
import Right from "../../Right";
import NavbarLogado from "./Navbar-logado";
import Footer from "../../Footer";
import { Container, Row, Col } from "react-bootstrap";

//tem que botar sempre os links na pag html principal tmb, se n nao funciona
function Logado() {
  return (
    <>
      <NavbarLogado />
      <Container>
        <Row>
          <Left />
          <Right />
        </Row>
        <Row>
          <Footer/>
        </Row>
      </Container>
      
    </>
  );
}

export default Logado;
