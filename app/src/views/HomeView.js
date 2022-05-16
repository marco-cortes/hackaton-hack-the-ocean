import tortuga from "../images/turtle-1.jpg"
import header from "../images/header-1.jpg"
import img1 from "../images/beach-1.jpg"
import img2 from "../images/beach-2.jpg"
import img3 from "../images/beach-3.jpg"


export const HomeView = () => {
  return (
    <div className="container-fluid">
      <p className="text">Green Travel</p>
      <p className="text2">Viajar nunca habia sido tan sustentable.</p>
      <img src={header} className="image1" alt="a" />

      <div className="textbox">
        <img src={tortuga} className="image2" alt="a" />

        <div className="textbox2">
          <p className="tittle2">¿Quienes Somos?</p>
          <p className="text3"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore nemo itaque perspiciatis ex tenetur fugit officia iste ipsam quaerat vitae reprehenderit saepe, dicta nulla? Porro eius tenetur hic totam odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, provident! Laboriosam quam, nemo nesciunt ducimus, eum quis vel totam dolorem vitae quo nisi ex tempore perspiciatis, fuga ipsa sit! Aspernatur.</p>
          <button className="button1">Contactanos</button>
        </div>
      </div>
      <div>
        <br />
        <br />
        <p className="tittle3"> Explora tu siguiente lugar turistico</p>
      </div>
      <div className="img-links">
        <a href="/html/List.html"><img src={img1} className="image3" alt="a" /></a>
        <a href="/html/List.html"><img src={img2} className="image3" alt="a" /> </a>
        <a href="/html/List.html"><img src={img3} className="image3" alt="a" /> </a>
      </div>
    </div>
  )
}
