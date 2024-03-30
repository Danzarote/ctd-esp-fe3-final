import Form from "../Components/Form";
import { useProducStates } from "../Context/GlobalContext";
import "./Contact.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const { state, dispatch } = useProducStates();
  return (
    <div className={state.darkMode ? "darkMode" : "lightMode"}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
