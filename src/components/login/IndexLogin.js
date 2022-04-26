import React, {useState} from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";


function Login() {
  const [post, setPost] = useState(null);
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const createPost = () => {
    axios.post("http://localhost:3001/api/v1/postlogin", {
      usuario: login,
      senha: senha
    }).then((response)=>{
      setPost(response.data)
    })
    console.log(post)
  }

  const getLoginValue = (event)=>{
    const loginValue = event.target.value;
    setLogin(loginValue)
  }

  const getSenhaValue = (event) => {
    const senhaValue = event.target.value;
    setSenha(senhaValue) 
  }

  return (
    <Container>
      <div style={style.container}>
        <div style={style.box}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicLogin">
              <Form.Label>Login de acesso</Form.Label>
              <Form.Control placeholder="insira o login" onChange={getLoginValue}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" placeholder="insira a senha" onChange={getSenhaValue}/>
            </Form.Group>

            <Button variant="primary" onClick={createPost}>
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
    color: "#99A1A6"
  },
};
export default Login;
