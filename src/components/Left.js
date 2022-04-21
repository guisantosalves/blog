import React from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import imagee from "../images/avatar.png";

//pegando a imagem por meio do import
const Left = (props) => {
  return (
    <Col sm={3}>
      <div style={{padding: '50px', border: '1px solid red'}}>

        <div style={{ marginTop: "70px" }}>
          <Image src={imagee} roundedCircle />
        </div>

        <div style={{ marginTop: "10px" }}>
          <p>Guilherme santos alves pinto</p>
          <p>
            Estudante de análise e <br />
            desenvolvimento de sistemas
          </p>
          <p>Desenvolvedor Web</p>
          <p></p>
        </div>

      </div>
    </Col>
  );
};

export default Left;
