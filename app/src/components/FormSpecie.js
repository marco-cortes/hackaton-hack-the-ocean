import { useForm } from "../helpers/useForm";

export const FormSpecie = ({ setDestination, destination }) => {

    const [specie, setSpecie, resetSpecie] = useForm({
        name: "",
        description: "",
        photo: "",
    });

    const addSpecie = (e) => {
        e.preventDefault();
        setDestination({
            ...destination,
            species: [specie, ...destination.species]
        });
        resetSpecie();
    }

    return (
        <form onSubmit={addSpecie} className="form-destination">
            <h2 className="title-h3 mb-2 mt-3">Especies</h2>
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={specie.name}
                    onChange={setSpecie}
                />
            </div>

            <div className="form-group">
                <label htmlFor="description">Descripción</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={specie.description}
                    onChange={setSpecie}
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="title">Imágen</label>
                <input
                    type="text"
                    className="form-control"
                    id="photo"
                    name="photo"
                    value={specie.photo}
                    onChange={setSpecie}
                />
            </div>

            <button type="submit" className="btn-primary mt-2">Agregar Especie</button>
            <div>
                {
                    destination.species.map((specie, index) => (
                        <div className="card-v" key={index}>
                            <h4 className="card-title">{specie.name}</h4>
                            <p className="card-text">{specie.description}</p>
                            <img src={specie.photo} alt="specie" className="img-fluid" />
                        </div>
                    ))
                }
            </div>
        </form>
    )
}
