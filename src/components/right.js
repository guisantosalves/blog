import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { Button, Col } from "react-bootstrap";
import axios from "axios";

var getData = [];

const Right = (props) => {
  var [getData, setgetData] = useState([]);
  var date = [];
  var subdate = [];
  //tem que usar o useEffect para que quando renderize a página
  //nao faça a requisição toda hora e sim, somente uma vez
  //quando abre a página
  useEffect(() => {
    // usando axios para pegar o post do BD
    axios
      .get("http://localhost:3001/api/v1/getpost")
      .then((response) => {
        setgetData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fixingDate = () => {
    getData.map((element) => {

      date.push(element.data);

    });
    date.map((item) => {
      if (item !== undefined) {

        subdate.push(item.substring(0, 10));
        
      }
    });
  };

  fixingDate();

  //quando for redenderizar com o map no react precisa usar o return dentro do outro return
  //se nao nao funciona
  return (
    <Col sm={9}>
      <div>
        {getData.map((item, index) => {
          return (
            <div style={style.postOfBlog}>
              <div style={style.titulo}>
                <h4>{item.titulo}</h4>
              </div>
              <div style={style.conteudo}>
                <p>{item.conteudo}</p>
              </div>
              <div style={style.likeAndDate}>
                <div style={style.date}>{subdate[index]}</div>
                <div style={style.autor}>{item.autor}</div>
              </div>
            </div>
          );
        })}
      </div>
    </Col>
  );
};

const style = {
  postOfBlog: {
    marginTop: "10px",
    padding: "10px",
    backgroundColor: "#C4C4C4",
    padding: "20px",
    paddingBottom: "40px",
    borderRadius: "10px",
  },
  titulo: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    margin: "5px",
    padding: "3px",
    borderRadius: "5px",
  },
  conteudo: {
    backgroundColor: "#FFFFFF",
    color: "#000000",
    margin: "5px",
    padding: "3px",
    borderRadius: "5px",
  },
  likeAndDate: {
    padding: "3px",
    marginTop: "-3px",
  },
  date: {
    display: "inline-block",
    float: "right",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    width: "170px",
    padding: "3px",
    borderRadius: "5px",
  },
  autor: {
    display: "inline-block",
    float: "left",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    width: "170px",
    padding: "3px",
    borderRadius: "5px",
    marginLeft: "2px",
  },
};
export default Right;
