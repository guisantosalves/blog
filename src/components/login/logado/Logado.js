import React, {useEffect} from "react";
import Left from "../../Left";
import Right from "../../Right";
import NavbarLogado from "./Navbar-logado";
import Footer from "../../Footer";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

//tem que botar sempre os links na pag html principal tmb, se n nao funciona
function Logado() {
  useEffect(()=>{
    axios.get("http://localhost:3001/api/v1/getlogin").then((response)=>{
      response.data.forEach((item, index) => {
        if(item.senha === window.sessionStorage.getItem("senha")){
          console.log("ok")
        }else{
          window.location.href = "http://localhost:3000/naologado"
        }
      });
    })
  }, [])
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
