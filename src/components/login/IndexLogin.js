import React from "react";
import { Form, Button, Container } from "react-bootstrap";

function Login() {
  return (
    <Container>
      <div style={style.container}>
        <div style={style.box}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicLogin">
              <Form.Label>Login de acesso</Form.Label>
              <Form.Control placeholder="insira o login" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="insira a senha" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Logar
            </Button>
          </Form>
        </div>
      </div>
    </Container>
  );
}

const style = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "35%",
  },
  box: {
    width: "400px",
    height: "400px",
    backgroundColor: "#5C5D8D",
    padding: "20px",
    borderRadius: "10px",
    color: "#99A1A6"
  },
};
export default Login;
