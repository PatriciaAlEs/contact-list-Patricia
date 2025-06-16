// Import necessary components from react-router-dom and other parts of the application.
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { apiServices } from "../services/apiServices";
import React, { useState} from "react";


export const AddContact = () => {
  // Access the global state and dispatch function using the useGlobalReducer hook.
  const { store, dispatch } = useGlobalReducer()
  const navigate = useNavigate(); // ✅ Aquí se llama el hook

  const [miContacto, setMiContacto] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  const handleSubmit = (e) => {
    setMiContacto({
      ...miContacto,
      [e.target.name]: e.target.value
    })
  }



  const enviarFormulario = async (e) => {
    e.preventDefault()
    try {
      const response = await apiServices.addContact(miContacto)
      dispatch({
        type: 'ADD_CONTACT',
        payload: response
      })
    
    setMiContacto({
      name: '',
      email: '',
      phone: '',
      address: ''
    }
    )
    navigate("/")
    } catch (error) {
      console.log('Error desde el envio del formulario:', error);

    }
  }

  return (
    <div className="container">
      <h2>Aqui ira el formulario para añadir un contacto</h2>
      <form onSubmit={enviarFormulario} className="contact-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            onChange={handleSubmit}
            value={miContacto.name}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            onChange={handleSubmit}
            value={miContacto.email}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="form-control"
            onChange={handleSubmit}
            value={miContacto.phone}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            className="form-control"
            onChange={handleSubmit}
            value={miContacto.address}
          />
        </div>

        <button type="submit" className="btn btn-primary">Agregar contacto</button>
      </form>

      <Link to="/oneContact" >
        <span className="navbar-brand mb-0 h1">Editar contacto</span></Link>
    </div>
  );
};
