import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import CryptoJS from "crypto-js";

function Login(props) {
  const [post, setPost] = useState(null);
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  //usando axios com o método post
  const createPost = () => {
    axios
      .post("http://localhost:3001/api/v1/postlogin", {
        usuario: login,
        senha: senha,
      })
      .then((response) => {
        setPost(response.data);
      });

    console.log(post);
  };

  //usando axios com o método get
  const getDataToVerify = () => {
    axios
      .get("http://localhost:3001/api/v1/getlogin")
      .then((response) => {
        //descriptografando
        const result = CryptoJS.AES.decrypt(response.data, process.env.REACT_APP_KEYOFAES);

        //passando para utf8
        const puttingInUtf8 = result.toString(CryptoJS.enc.Utf8);

        //verificando se a senha existe na string
        const getResultOfEnv =
          process.env.REACT_APP_PASSWORD == senha ? true : false;

        if (puttingInUtf8.indexOf(process.env.REACT_APP_PASSWORD) !== -1) {
          if (getResultOfEnv) {
            console.log("você esta logado");

            // ! mudar quando subir o blog
            window.location.href = "http://localhost:3000/logado";
          }else{
            console.log("Senha incorreta")
            alert("Senha incorreta")
          }
        } else {
          console.log("você nao esta logado");
          alert("você nao esta logado")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <div style={style.container}>
        <div style={style.box}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicLogin">
              <Form.Label>Login de acesso</Form.Label>
              <Form.Control
                placeholder="insira o login"
                onChange={(e) => setLogin(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="insira a senha"
                onChange={(e) => setSenha(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" onClick={getDataToVerify}>
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
    marginTop: "25%",
  },
  box: {
    width: "400px",
    height: "400px",
    backgroundColor: "#5C5D8D",
    padding: "20px",
    borderRadius: "10px",
    color: "#99A1A6",
  },
};
export default Login;
