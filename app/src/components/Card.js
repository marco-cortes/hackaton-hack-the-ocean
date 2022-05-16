import { Link } from "react-router-dom"
import img from "../images/turismo.jpg";

export const Card = ({destination}) => {
  return (
    <div className="card">
        <div className="card-header">
            <img className="card-img" alt="a" src={destination.image ? destination.image : img} />
        </div>
        <div className="card-body">
            <h2 className="card-title">{destination.name}</h2>
            <p className="card-text">{destination.description}</p>
        </div>
        <div className="card-footer">
            <Link to={`/user/destination/${destination.id}`} className="btn-card">Ver más</Link>
        </div>
    </div>
  )
}
