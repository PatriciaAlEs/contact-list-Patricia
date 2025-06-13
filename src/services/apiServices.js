export const apiServices = {}

apiServices.getAgenda = async () => {
    try {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/patri_agenda')
        const data = await response.json()
        console.log("Esta es la agenda ---> ", data)
        return data
    } catch (error) {
        console.log('Error trayendo agenda', error);

    }

}

apiServices.createAgenda = async () => {


}

apiServices.getContacts = async () => {
    try {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/patri_agenda/contacts')
        const data = await response.json()
        if(!response){
            console.log("creando agenda...");
            apiServices.createAgenda()
        }
        console.log("Estos son los contactos ---> ", data)

        return data
    } catch (error) {
        console.log('Error trayendo contactos', error);
        
    }

}

