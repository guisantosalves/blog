import React, {useState} from "react";
import { Container, Navbar, Button } from "react-bootstrap";

const NavbarLogado = (props) => {

  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">Blog</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <h3>
              <Button variant="success" style={{ backgroundColor: "#06BCC1" }}>
                <a
                  href="/postar"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "5px",
                  }}
                >
                  Postar
                </a>
              </Button>{" "}
              <Button variant="danger">
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    padding: "5px",
                  }}
                >
                  Sair
                </a>
              </Button>
            </h3>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

// const stylingMyComponent = {
//   textOfLinks: {
//     textDecore
//   },
// };

export default NavbarLogado;
