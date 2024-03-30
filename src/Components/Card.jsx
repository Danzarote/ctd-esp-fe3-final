import { Link } from "react-router-dom";
import { useProducStates } from "../Context/GlobalContext";

const Card = ({ doctor }) => {
  const { state, dispatch } = useProducStates();
  console.log(state);

  const addFav = () => {
    dispatch({ type: "ADD_FAVORITES", payload: doctor });
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className="card">
      <Link to={`/dentista/${doctor.id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="./images/doctor.jpg" style={{ width: 200 }} />
        <p>{doctor.name}</p>
        <p>{doctor.username}</p>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;
