export const initialStore=()=>{
  return {
    agenda: null,
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
    default:
      throw Error('Unknown action.');
  }    
}
