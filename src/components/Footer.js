import React from "react";
import { Col } from "react-bootstrap";

const Footer = (props) => {
  return (
    <Col>
    <div style={style.footer}>
      <h1>footer</h1>
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
  }
}
export default Footer;
