import React from "react";
import Footer from "./Footer";
import { Button, Container, Row, Col } from "react-bootstrap";

const Right = (props) => {
  return (
    <>
      <Col sm={9}>
        <div style={style.postOfBlog}>
          <div style={style.titulo}>
            <h4>Título</h4>
          </div>
          <div style={style.conteudo}>
            <p>conteúdo</p>
          </div>
          <div style={style.likeAndDate}>
            <div style={{ display: "inline-block" }}>
              <Button variant="outline-primary">Like</Button>{" "}
              <Button variant="outline-primary">dont like</Button>
            </div>
            <div style={style.date}>
            date
            </div>
          </div>
        </div>

        <div style={style.postOfBlog}>
          <div style={style.titulo}>
            <h4>Título</h4>
          </div>
          <div style={style.conteudo}>
            <p>conteúdo</p>
          </div>
          <div style={style.likeAndDate}>
            <div style={{ display: "inline-block" }}>
              <Button variant="outline-primary">Like</Button>{" "}
              <Button variant="outline-primary">dont like</Button>
            </div>
            <div style={style.date}>
            date
            </div>
          </div>
        </div>

        <div style={style.postOfBlog}>
          <div style={style.titulo}>
            <h4>Título</h4>
          </div>
          <div style={style.conteudo}>
            <p>conteúdo</p>
          </div>
          <div style={style.likeAndDate}>
            <div style={{ display: "inline-block" }}>
              <Button variant="outline-primary">Like</Button>{" "}
              <Button variant="outline-primary">dont like</Button>
            </div>
            <div style={style.date}>
            date
            </div>
          </div>
        </div>

        <div style={style.postOfBlog}>
          <div style={style.titulo}>
            <h4>Título</h4>
          </div>
          <div style={style.conteudo}>
            <p>conteúdo</p>
          </div>
          <div style={style.likeAndDate}>
            <div style={{ display: "inline-block" }}>
              <Button variant="outline-primary">Like</Button>{" "}
              <Button variant="outline-primary">dont like</Button>
            </div>
            <div style={style.date}>
            date
            </div>
          </div>
        </div>

        <div style={style.postOfBlog}>
          <div style={style.titulo}>
            <h4>Título</h4>
          </div>
          <div style={style.conteudo}>
            <p>conteúdo</p>
          </div>
          <div style={style.likeAndDate}>
            <div style={{ display: "inline-block" }}>
              <Button variant="outline-primary">Like</Button>{" "}
              <Button variant="outline-primary">dont like</Button>
            </div>
            <div style={style.date}>
            date
            </div>
          </div>
        </div>

        <div style={style.postOfBlog}>
          <div style={style.titulo}>
            <h4>Título</h4>
          </div>
          <div style={style.conteudo}>
            <p>conteúdo</p>
          </div>
          <div style={style.likeAndDate}>
            <div style={{ display: "inline-block" }}>
              <Button variant="outline-primary">Like</Button>{" "}
              <Button variant="outline-primary">dont like</Button>
            </div>
            <div style={style.date}>
            date
            </div>
          </div>
        </div>

        <div style={style.postOfBlog}>
          <div style={style.titulo}>
            <h4>Título</h4>
          </div>
          <div style={style.conteudo}>
            <p>conteúdo</p>
          </div>
          <div style={style.likeAndDate}>
            <div style={{ display: "inline-block" }}>
              <Button variant="outline-primary">Like</Button>{" "}
              <Button variant="outline-primary">dont like</Button>
            </div>
            <div style={style.date}>
            date
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

const style = {
  postOfBlog: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#C4C4C4",
  },
  titulo: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    margin: "5px",
    padding: "3px",
    borderRadius: "5px"
  },
  conteudo: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    margin: "5px",
    padding: "3px",
    borderRadius: "5px",
  },
  likeAndDate: {
    margin: "5px",
    padding: "3px",
  },
  date: {
    display: "inline-block", 
    float: "right",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    width: "170px",
    padding: "3px",
    borderRadius: "5px",
  }
};
export default Right;
