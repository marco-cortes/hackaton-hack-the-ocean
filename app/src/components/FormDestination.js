import { startAddDestination } from "../redux/actions/owner";
import { useDispatch } from "react-redux";

export const FormDestination = ({ destination, setDestination, reset, setValues }) => {

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newDestination = {
            name: destination.name,
            description: destination.description,
            contact: {
                phone: destination.phone,
                email: destination.email
            },
            score: destination.score,
            ubication: {
                state: destination.state,
                city: destination.city,
                cp: destination.cp
            },
            photo: destination.photo,
            recommendations: destination.recomendations,
            activities: destination.activities,
            species: destination.species,
            status: destination.status,
            user: destination.user,
        }

        console.log(newDestination);

        dispatch(startAddDestination(newDestination))
        //reset();
    }

    return (
        <form onSubmit={handleSubmit} className="form-destination">
            <h2 className="title-h3 mb-2 mt-1">Destino</h2>
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={destination.name}
                    onChange={setDestination}
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={destination.description}
                    onChange={setDestination}
                ></textarea>
            </div>

            <div className="d-flex">
                <div className="form-group">
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={destination.phone}
                        onChange={setDestination}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={destination.email}
                        onChange={setDestination}
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="state">Estado</label>
                <input
                    type="text"
                    className="form-control"
                    id="state"
                    name="state"
                    value={destination.state}
                    onChange={setDestination}
                />
            </div>

            <div className="d-flex">
                <div className="form-group">
                    <label htmlFor="city">Ciudad</label>
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        name="city"
                        value={destination.city}
                        onChange={setDestination}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cp">Código Postal</label>
                    <input
                        type="text"
                        className="form-control"
                        id="cp"
                        name="cp"
                        value={destination.cp}
                        onChange={setDestination}
                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="title">Imágen</label>
                <input
                    type="text"
                    className="form-control"
                    id="photo"
                    name="photo"
                    value={destination.photo}
                    onChange={setDestination}
                />
            </div>

            <button type="submit" className="btn-submit mt-2">Guardar</button>

        </form>
    )
}
