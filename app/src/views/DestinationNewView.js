import { useForm } from "../helpers/useForm";
import { useSelector } from "react-redux";
import { FormDestination } from "../components/FormDestination";
import { FormRecomendation } from "../components/FormRecomendation";
import { FormActivity } from "../components/FormActivity";
import { FormSpecie } from "../components/FormSpecie";

export const DestinationNewView = ({ value }) => {

  const { user } = useSelector(state => state.auth);

  const [destination, setDestination, reset, setValues] = useForm({
    name: "",
    description: "",
    user: user._id,
    phone:"", 
    email: "",
    score: 0,
    state: "", 
    city: "",
    cp: "",
    photo: "",
    recomendations: [],
    activities: [],
    species: [],
    status: "PENDING",
  })


  return (
    <div className="form-destination-container">
      <FormDestination destination={destination} setDestination={setDestination} setValues={setValues} reset={reset} />
      <FormRecomendation destination={destination} setDestination={setValues} />
      <FormActivity destination={destination} setDestination={setValues} />
      <FormSpecie destination={destination} setDestination={setValues} />
    </div>
  )
}
