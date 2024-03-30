import { useState } from "react";
import Card from "../Components/Card";
import { useProducStates } from "../Context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useProducStates();
  const doctors = JSON.parse(localStorage.getItem("favs"));
  const [mostrar, setMostrar] = useState(true);
  return (
    <div
      className={state.darkMode ? "darkMode" : "lightMode"}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        textAlign: "center",
      }}
    >
      <h1>Dentists Favs</h1>
      {mostrar && (
        <div className="card-grid">
          {doctors.map((doctor) => {
            return <Card doctor={doctor} key={doctor.id} />;
          })}
          {/* este componente debe consumir los destacados del localStorage */}
          {/* Deberan renderizar una Card por cada uno de ellos */}
        </div>
      )}
      <div>
        <button
          onClick={() => {
            dispatch({ type: "REMOVE_FAVORITES" });
            setMostrar(false);
          }}
        >
          Eliminar Favoritos
        </button>
      </div>
    </div>
  );
};

export default Favs;
