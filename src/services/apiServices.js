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


