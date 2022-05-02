import React, {useEffect} from "react";
import NavbarComponent from "../../Navbar";
import Footer from "../../Footer";
import { Container, Row, Col } from "react-bootstrap";


//tem que botar sempre os links na pag html principal tmb, se n nao funciona
function Naologado() {
  return (
    <>
      <NavbarComponent/>
      <Container>
        <Row>
          <Col>
            <div>
                <h1>usuário nao logado</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Footer/>
        </Row>
      </Container>
      
    </>
  );
}

export default Naologado;
