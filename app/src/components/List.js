import { Card } from "./Card";

export const List = ({ list }) => {

  const cards = [
    {
      id: 1,
      name: "Destino 1",
      description: "Lorem ipsum dolor sit amet",
      image: "https://www.hub.com.pa/wp-content/uploads/2020/09/blues.jpg"
    },
    {
      id: 2,
      name: "Destino 2",
      description: "Lorem ipsum dolor sit amet",
      image: "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/taleb_rifai_crop_1.jpg?itok=4yDr7JOl"
    },
    {
      id: 3,
      name: "Destino 3",
      description: "Lorem ipsum dolor sit amet",
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5d/c8/caption.jpg?w=700&h=500&s=1&cx=2606&cy=1838&chk=v1_a61182fd4040ed4ecc4e"
    },
    {
      id: 4,
      name: "Destino 4",
      description: "Lorem ipsum dolor sit amet",
      image: "https://www.nationalgeographic.com.es/medio/2020/06/05/crucero_0071346c_800x533.jpg"
    },
    {
      id: 5,
      name: "Destino 5",
      description: "Lorem ipsum dolor sit amet",
      image: "https://cdn.forbes.com.mx/2018/06/Boracay-Portada.jpg"
    }
  ]



  return (
    <div className="list-container">
      {
        list && list.map(destination => (
          <Card key={destination.id} destination={destination} />
        ))
      }
      {
        cards && cards.length > 0 ?
          cards.map((item, i) => (
            <Card key={i} destination={item} />
          ))
          : <h2>Lista vacía</h2>
      }
    </div>
  )
}
