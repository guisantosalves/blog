import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavbarComponent = (props) => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="#home">Blog</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <h3>
              <a href="#home" style={{textDecoration: 'none'}}>Login</a>
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

export default NavbarComponent;
