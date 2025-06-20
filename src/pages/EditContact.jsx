import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiServices } from "../services/apiServices.js";

export const EditContact = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [miContacto, setMiContacto] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {

        const getOneContact = async () => {
            try {
                const response = await apiServices.getAgenda();
                const contact = response.contacts.find(contact => contact.id == id);
                console.log("Respuesta de la API:", response);
                setMiContacto(contact)

            } catch (error) {
                console.log(error);

            }
        }
        getOneContact(id);
    }, [id]);


    const handleChange = (e) => {
        setMiContacto({
            ...miContacto,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await apiServices.editContact(id, miContacto);
            console.log("Respuesta de la API al actualizar:", response);
            navigate("/");
        } catch (error) {
            console.error("Error al actualizar el contacto:", error);
        }
    }

    return (
        <div className="container text-center mt-5">
            <div className="container text-center mt-5">
                <h2>Edita tu contacto: </h2>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
                            value={miContacto.address}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>
        </div>
    );
}