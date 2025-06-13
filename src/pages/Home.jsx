import { apiServices } from "../services/apiServices.js";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	useEffect(()=>{
		
		apiServices.getContacts()
	
	}, [])
	return (
		<div className="text-center mt-5">
			<h1>Hello Contact List!!</h1>

		</div>
	);
}; 