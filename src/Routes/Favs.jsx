import Card from "../Components/Card";
import { useProducStates } from "../Context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useProducStates();
  const doctors = JSON.parse(localStorage.getItem("favs"));
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {doctors.map((doctor) => {
          return <Card doctor={doctor} key={doctor.id} />;
        })}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_FAVORITES" });
        }}
      >
        Eliminar Favoritos
      </button>
    </>
  );
};

export default Favs;
