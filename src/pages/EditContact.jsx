

export const EditContact = () => {
    return (
        <div className="container text-center mt-5">
            <div className="container text-center mt-5">
                <h2>Edita tu contacto: </h2>
                <form className="contact-form">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                            // onChange={handleSubmit}
                            // value={miContacto.name}
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
                            // onChange={handleSubmit}
                            // value={miContacto.email}
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
                            // onChange={handleSubmit}
                            // value={miContacto.phone}
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
                            // onChange={handleSubmit}
                            // value={miContacto.address}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </div>
        </div>
    );
}