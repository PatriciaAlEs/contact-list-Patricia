import { apiServices } from "../services/apiServices.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()


	useEffect(() => {

		const getAgendaAsync = async () => {
			const misContactos = await apiServices.getAgenda();
			dispatch({ type: 'GET_CONTACTS', payload: misContactos.contacts });
			console.log(misContactos);

		}
		getAgendaAsync()
	}, [])
	return (
		<div className="text-center mt-5">
			<h1>Hello Contact List!!</h1>
			
			<ul>
				{store.contactos?.map((contacto, index) => (
					<div key={index} className="card mb-3">
						<li>Nombre:{contacto.name} </li>
						<li>Phone:{contacto.phone} </li>
						<li>Email:{contacto.email} </li>
						<li>Address:{contacto.address} </li>
					</div>

				))}
			</ul>

		</div>
	);
}; 