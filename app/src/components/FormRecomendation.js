import { useForm } from "../helpers/useForm";

export const FormRecomendation = ({ setDestination, destination }) => {



    const [recomendation, setRecomendation, resetRecomendation] = useForm({
        title: "",
        text: "",
        photo: "",
    });

    const addRecomendation = (e) => {
        e.preventDefault();
        console.log(destination.recomendations);
        console.log(recomendation);
        setDestination({
            ...destination,
            recomendations: [recomendation, ...destination.recomendations]
        });
        resetRecomendation();
    }


    return (
        <form onSubmit={addRecomendation} className="form-destination">
            <h2 className="title-h3 mb-2 mt-3">Recomendaciones</h2>
            <div className="form-group">
                <label htmlFor="title">Titulo</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={recomendation.title}
                    onChange={setRecomendation}
                />
            </div>

            <div className="form-group">
                <label htmlFor="text">Descripción</label>
                <textarea
                    className="form-control"
                    id="text"
                    name="text"
                    value={recomendation.text}
                    onChange={setRecomendation}
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="title">Imágen</label>
                <input
                    type="text"
                    className="form-control"
                    id="photo"
                    name="photo"
                    value={recomendation.photo}
                    onChange={setRecomendation}
                />
            </div>

            <button type="submit" className="btn-primary mt-2">Agregar Recomendación</button>

            <div className="card-v-container">
                {
                    destination.recomendations.map((recomendation, index) => (
                        <div className="card-v" key={index}>
                            <h4 className="card-title">{recomendation.title}</h4>
                            <p className="card-text">{recomendation.text}</p>
                            <img src={recomendation.photo} alt="recomendation" className="img-fluid" />
                        </div>
                    ))
                }
            </div>
        </form>
    )
}
