import { useSelector } from "react-redux";
import { List } from "../components/List";

export const DestinationsView = () => {

  const { destinations } = useSelector(state => state.destination);

  if(!destinations) 
    return <h2>Loading...</h2>;

  return (
    <List list={destinations} />
  )
}
