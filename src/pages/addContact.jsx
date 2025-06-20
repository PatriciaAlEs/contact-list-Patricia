// Import necessary components from react-router-dom and other parts of the application.
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { apiServices } from "../services/apiServices";
import React, { useState } from "react";


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
      const datos = await apiServices.addContact(miContacto);
      console.log("Datos del contacto añadido:", datos);
      dispatch({ type: 'ADD_CONTACT', payload: datos });
    } catch (error) {
      console.log('Error al añadir el contacto', error);
    }
    setMiContacto({
      name: '',
      email: '',
      phone: '',
      address: ''
    })
    navigate('/');
  }


  return (
    <div className="container text-center mt-5">
      <h2>Agrega un nuevo contacto a tu agenda:</h2>
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
    </div>
  );
};
