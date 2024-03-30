import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detail.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const id = useParams();

  const [detalle, setDetalle] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id.id}`)
      .then((res) => res.json())
      .then((res) => setDetalle(res));
  }, []);

  console.log(detalle);

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className="detail-wrapper">
      <div className="detalle">
        <div>Name</div>
        <div>{detalle.name}</div>
      </div>
      <div className="detalle">
        <div>Email</div>
        <div>{detalle.email}</div>
      </div>
      <div className="detalle">
        <div>Phone</div>
        <div>{detalle.phone}</div>
      </div>
      <div className="detalle">
        <div>Website</div>
        <div>{detalle.website}</div>
      </div>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  );
};

export default Detail;
