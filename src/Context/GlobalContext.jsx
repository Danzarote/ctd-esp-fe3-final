import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const ProducStates = createContext();
const lsfavs = JSON.parse(localStorage.getItem("favs"));

const GlobalContext = ({ children }) => {
  let initialState = {
    apiResponse: [],
    favs: lsfavs || [],
    darkMode: false,
  };

  const productsReducer = (state, action) => {
    switch (action.type) {
      case "ADD_FAVORITES":
        return {
          ...state,
          favs: [...state.favs, action.payload],
        };
      case "REMOVE_FAVORITES":
        return {
          ...state,
          favs: [],
        };
      case "ADD_API_RESPONSE":
        return {
          ...state,
          apiResponse: [action.payload],
        };
      case "CHANGE_THEME":
        return {
          ...state,
          darkMode: !state.darkMode,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(productsReducer, initialState);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  return (
    <ProducStates.Provider value={{ state, dispatch }}>
      {children}
    </ProducStates.Provider>
  );
};

export default GlobalContext;

export const useProducStates = () => useContext(ProducStates);
