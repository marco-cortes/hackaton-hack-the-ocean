import { useForm } from "../helpers/useForm";

export const FormActivity = ({ setDestination, destination }) => {

    const [activity, setActivity, resetActivity] = useForm({
        title: "",
        text: "",
        photo: "",
    });

    const addActivity = (e) => {
        e.preventDefault();
        
        setDestination({
            ...destination,
            activities: [activity, ...destination.activities]
        });
        resetActivity();
    }
    return (
        <form onSubmit={addActivity} className="form-destination">
            <h2 className="title-h3 mb-2 mt-3">Actividades</h2>
            <div className="form-group">
                <label htmlFor="title">Título</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={activity.title}
                    onChange={setActivity}
                />
            </div>

            <div className="form-group">
                <label htmlFor="text">Descripción</label>
                <textarea
                    className="form-control"
                    id="text"
                    name="text"
                    value={activity.text}
                    onChange={setActivity}
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="title">Imágen</label>
                <input
                    type="text"
                    className="form-control"
                    id="photo"
                    name="photo"
                    value={activity.photo}
                    onChange={setActivity}
                />
            </div>

            <button type="submit" className="btn-primary mt-2">Agregar Actividad</button>

            <div>
                {
                    destination.activities.map((activity, index) => (
                        <div className="card-v" key={index}>
                            <h4 className="card-title">{activity.title}</h4>
                            <p className="card-text">{activity.text}</p>
                            <img src={activity.photo} alt="activity" className="img-fluid" />
                        </div>
                    ))
                }
            </div>
        </form>
    )
}
