import { apiServices } from "../services/apiServices.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()


	useEffect(() => {

		const getAgendaAsync = async () => {
			const misContactos = await apiServices.getAgenda();
			dispatch({ type: 'GET_CONTACTS', payload: misContactos.contacts });
			console.log("Los contactos pedidos desde Home: ", misContactos);
		}
		getAgendaAsync()
	}, [])
	return (
		<div className="text-center mt-5">
			<div className="contact-list">
				<h1 className="text-center">📇 Lista de Contactos</h1>

				{store.contactos?.map((contacto, index) => (
					<div key={index} className="contact-item">
						<div className="contact-info">
							<p><strong>Nombre:</strong> {contacto.name}</p>
							<p><strong>Teléfono:</strong> {contacto.phone}</p>
							<p><strong>Email:</strong> {contacto.email}</p>
							<p><strong>Dirección:</strong> {contacto.address}</p>
						</div>
					</div>
				))}
			</div>


		</div>
	);
}; 