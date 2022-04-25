import React from "react";
import { Col } from "react-bootstrap";

const Footer = (props) => {
  return (
    <Col>
    <div style={style.footer}>
      <h6>Todos direitos reservados</h6>
    </div>
    </Col>
  );
};

const style = {
  footer:{
    backgroundColor: "#C5D8D1",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
}
export default Footer;
