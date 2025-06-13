// Import necessary components from react-router-dom and other parts of the application.
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";  // Custom hook for accessing the global state.

export const Demo = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()

  return (
    <div className="container">
      <h2>Aqui ira el formulario para añadir un contacto</h2>
      <p>En esta pagina se podra añadir un nuevo contacto, incluyendo su nombre, telefono, email y una foto.</p>
      <Link to="/oneContact" >
      <span className="navbar-brand mb-0 h1">ver info de contacto</span></Link>
    </div>
  );
};
