import React from "react";
import { Container, Col, Button, Row, Form } from "react-bootstrap";

const Postando = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <div style={style.colum}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicTitulo">
                <Form.Label>Titulo:</Form.Label>
                <Form.Control placeholder="insira o titulo" style={{marginTop: "-5px"}}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="FormBasicAutor">
                <Form.Label>Autor:</Form.Label>
                <Form.Control placeholder="insira o autor" style={{marginTop: "-5px"}}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="FormBasicConteudo">
                <Form.Label>Conteúdo:</Form.Label>
                <Form.Control as="textarea" rows={4} style={{marginTop: "-5px"}}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="FormBasicDate">
                <Form.Label>Data:</Form.Label>
                <Form.Control type="date" style={{marginTop: "-5px"}}/>
              </Form.Group>

              <Button variant="primary" style={style.buttonSalvar}>
                salvar
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const style = {
  colum: {
    borderRadius: "10px",
    backgroundColor: "#F4D1AE",
    padding: "10px",
    margin: "10px",
  },
  buttonSalvar: {
    display: "flex",
    float: "right",
    marginTop: "15px",
    padding: "10px",
    width: "140px",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default Postando;
