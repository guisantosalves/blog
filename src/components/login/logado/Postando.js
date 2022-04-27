import React from "react";
import { Container, Col, Button, Row, Form } from "react-bootstrap";

const Postando = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div style={{borderRadius: "10px", backgroundColor: "#F4D1AE", padding: "5px"}}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicTitulo">
                <Form.Label>Titulo:</Form.Label>
                <Form.Control placeholder="insira o titulo" />
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Postando;
