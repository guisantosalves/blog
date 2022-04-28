import React, { useState } from "react";
import { Container, Col, Button, Row, Form } from "react-bootstrap";
import axios from "axios";

const Postando = (props) => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [data, setData] = useState("");

  //usando axios para fazer o post
  var objectToPost = {
    titulo: titulo,
    autor: autor,
    conteudo: conteudo,
    data: data,
  };

  const posting = () => {
    axios
      .post("http://localhost:3001/api/v1/posting", objectToPost)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Row>
        <Col>
          <div style={style.colum}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicTitulo">
                <Form.Label>Titulo:</Form.Label>
                <Form.Control
                  placeholder="insira o titulo"
                  style={{ marginTop: "-5px" }}
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="FormBasicAutor">
                <Form.Label>Autor:</Form.Label>
                <Form.Control
                  placeholder="insira o autor"
                  style={{ marginTop: "-5px" }}
                  onChange={(e) => setAutor(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="FormBasicConteudo">
                <Form.Label>Conteúdo:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  style={{ marginTop: "-5px" }}
                  onChange={(e) => setConteudo(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="FormBasicDate">
                <Form.Label>Data:</Form.Label>
                <Form.Control
                  type="date"
                  style={{ marginTop: "-5px" }}
                  onChange={(e) => setData(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="primary"
                style={style.buttonSalvar}
                onClick={posting}
              >
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
