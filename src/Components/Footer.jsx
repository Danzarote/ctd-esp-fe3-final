import { useProducStates } from "../Context/GlobalContext";
import "./Footer.css";
const Footer = () => {
  const { state, dispatch } = useProducStates();
  return (
    <div className={state.darkMode ? "darkMode" : "lightMode"}>
      <footer>
        <p>Powered by</p>
        <img src="./images/DH.png" alt="DH-logo" />
      </footer>
    </div>
  );
};

export default Footer;
