import Home from "./Routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layaout from "./Components/Layout/Layaout";
import Detail from "./Routes/Detail";
import Contact from "./Routes/Contact";
import GlobalContext from "./Context/GlobalContext";
import Favs from "./Routes/Favs";

function App() {
  return (
    <BrowserRouter>
      <GlobalContext>
        <Routes>
          <Route element={<Layaout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/dentista/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Route>

          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </GlobalContext>
    </BrowserRouter>
  );
}

export default App;
