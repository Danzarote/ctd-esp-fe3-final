import { Link } from "react-router-dom";
import { useProducStates } from "../Context/GlobalContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, dispatch } = useProducStates();

  return (
    <div>
      <nav>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <ul>
          <Link to="/home">Home</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/favs">Favoritos</Link>
        </ul>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEME" });
          }}
        >
          Change theme
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
