export const initialStore=()=>{
  return {
    agenda: null,
    contacto: null,
    contactos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

    case 'GET_AGENDA':
      return {
        ...store,
        agenda: action.payload
      };

    case 'GET_CONTACTS':
      return {
        ...store,
        contactos: action.payload
      };
    case 'ADD_CONTACT':
      return {
        ...store,
        contactos: [...store.contactos, action.payload] // nos actualiza el array de contactos, y nos añade el contacto nuevo (action.payload)
      };
    case 'DELETE_CONTACT':
      return{
        ...store,
        contactos: store.contactos.filter(contacto => contacto.id !== action.payload) // Devuelve un nuevo array que excluye el contacto cuyo id es igual a action.payload
      }
    default:
      throw Error('Unknown action.');
  }    
}
