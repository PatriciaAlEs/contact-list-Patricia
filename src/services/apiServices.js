export const apiServices = {}

apiServices.getAgenda = async () => {
    try {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/patri_agenda')
        if (!response.ok) {
            const resp = await apiServices.createAgenda()
            return resp
        } else {
            const data = await response.json()
            console.log("Esta es la agenda ---> ", data)
            return data
        }
    } catch (error) {
        console.log('Error trayendo agenda', error);
    }

}

apiServices.createAgenda = async () => {
    try {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/patri_agenda', {
            method: 'POST'
        })
        const data = await response.json()
        if (response.ok) {
            console.log("Agenda creada correctamente:", data);
        } else {
            console.warn("El POST no tuvo éxito:", data);
        }
        return data
    }
    catch (error) {
        console.log('Error creando agenda', error);
    }
}

apiServices.addContact = async (contacto) => {
    try {
        const response = await fetch('https://playground.4geeks.com/contact/agendas/patri_agenda/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contacto)
        });
        const data = await response.json()
        return data
    } catch (error) {
        console.log('Error añadiendo contacto', error);
    }
}

apiServices.editContact = async (id, nuevosDatos) => {
    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/patri_agenda/contacts/${id}` , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevosDatos)
        })
        const data = await response.json()
        console.log("Contacto editado ---> ", data);
        return data
    } catch (error) {
        console.log('Error editando contacto', error);
    }
}

apiServices.deleteContact = async (id) => {
    try {
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/patri_agenda/contacts/${id}`, {
            method: 'DELETE'
        });
        return console.log("Contacto eliminado correctamente");
        
    } catch (error) {
        console.log('Error eliminando contacto', error);
        
    }
}