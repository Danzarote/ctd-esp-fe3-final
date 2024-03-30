import { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useProducStates } from "../Context/GlobalContext";
import "./Home.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useProducStates();
  const [doctors, setDoctor] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setDoctor(res));
  }, []);

  return (
    <main className={state.darkMode ? "darkMode" : "lightMode"}>
      <h1>Home</h1>
      <div className="card-grid">
        {doctors.map((doctor) => {
          return <Card doctor={doctor} key={doctor.id} />;
        })}
      </div>
    </main>
  );
};

export default Home;
