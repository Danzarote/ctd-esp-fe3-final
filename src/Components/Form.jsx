import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [info, setInfo] = useState({
    name: "",
    email: "",
  });

  const [mostrar, setMostrar] = useState(false);
  const [error, setError] = useState(false);

  let regex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    if (info.name.trimStart().length >= 5 && regex.test(info.email)) {
      setMostrar(true);
      setError(false);
    } else {
      setError(true);
      setMostrar(false);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full name"
          onChange={(evento) => setInfo({ ...info, name: evento.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(evento) =>
            setInfo({ ...info, email: evento.target.value })
          }
        />
        <button type="submit">Send</button>
      </form>
      {console.log(info)}

      {mostrar && (
        <>
          <h1>Gracias {info.name}, te contactaremos cuanto antes via mail</h1>
        </>
      )}
      {error ? (
        <p style={{ color: "red" }}>
          Por favor verifique su información nuevamente
        </p>
      ) : null}
    </div>
  );
};

export default Form;
