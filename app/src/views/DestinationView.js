import cozumel from "../images/cozumel.jpg";
import tortuga from "../images/4.jpg";
import basura from "../images/5.jpg";
import limpiando from "../images/6.jpg";

export const DestinationView = () => {

  return (
    <div className="report-container">

      <div>
        <h2 className="title-h2">Cozumel</h2>
        <h3 className="title-h3">Destino Turistico</h3>
      </div>

      <div className="hero">
        <div>
          <img className="imagen-hero" src={cozumel} alt="" />
        </div>

        <div className="texto-hero">
          <h2>Ubicacion</h2>
          <p>lorem ipsum mkdasks </p>
        </div>
      </div>

      <div className="division">

        <div className="actividades-container">
          <h3>Lista de actividades</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint saepe ipsa deserunt? Ad aliquid quae dolorum cupiditate nam dolore delectus ipsum facilis ipsam voluptate, magnam accusamus eaque aliquam excepturi porro.</p>
        </div>

        <div className="imagenes-actividad ">
          <img src={tortuga} alt="" />
          <img src={basura} alt="" />
        </div>

        <div className="imagenes-actividad">
          <img src={limpiando} alt="" />
        </div>
      </div>

      <div>
        <h2 className="title-h2">Recomendacion de cuidado de la Fauna</h2>
      </div>

      <div className="tarjetas">

        <div className="tarjeta">
          <div className="titulo-tarjeta">No usar popotes</div>
          <div className="cuerpo-tarjeta">
            <img className="imagen-tarjeta" src={basura} alt="muestra" />
            <p>lorem ipsum dolor sit amet, lorem ipsum dolor sit ame consectetur adip</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="titulo-tarjeta">No usar popotes</div>
          <div className="cuerpo-tarjeta">
            <img className="imagen-tarjeta" src={basura} alt="muestra" />
            <p>lorem ipsum dolor sit amet, lorem ipsum dolor sit ame consectetur adip</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="titulo-tarjeta">No usar popotes</div>
          <div className="cuerpo-tarjeta">
            <img className="imagen-tarjeta" src={basura} alt="muestra" />
            <p>lorem ipsum dolor sit amet, lorem ipsum dolor sit ame consectetur adip</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="titulo-tarjeta">No usar popotes</div>
          <div className="cuerpo-tarjeta">
            <img className="imagen-tarjeta" src={basura} alt="muestra" />
            <p>lorem ipsum dolor sit amet, lorem ipsum dolor sit ame consectetur adip</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="titulo-tarjeta">No usar popotes</div>
          <div className="cuerpo-tarjeta">
            <img className="imagen-tarjeta" src={basura} alt="muestra" />
            <p>lorem ipsum dolor sit amet, lorem ipsum dolor sit ame consectetur adip</p>
          </div>
        </div>

        <div className="tarjeta">
          <div className="titulo-tarjeta">No usar popotes</div>
          <div className="cuerpo-tarjeta">
            <img className="imagen-tarjeta" src={basura} alt="muestra" />
            <p>lorem ipsum dolor sit amet, lorem ipsum dolor sit ame consectetur adip</p>
          </div>
        </div>
      </div>

      <div className="division">
        <h2>Fauna de la Zona</h2>
      </div>

      <div className="tarjetas">
        <div className="tarjeta">
          <div className="titulo-tarjeta">Tortuga</div>
          <div className="cuerpo-tarjeta">
            <img className="imagen-tarjeta" src={basura} alt="muestra" />
          </div>
          <div className="link-tarjeta">
            <a href="#">Conocer mas</a>
          </div>
        </div>
        <div className="tarjeta">
          <div className="titulo-tarjeta">Tortuga</div>
          <div className="cuerpo-tarjeta">
            <img className="imagen-tarjeta" src={basura} alt="muestra" />
          </div>
          <div className="link-tarjeta">
            <a href="#">Conocer mas</a>
          </div>
        </div>
        <div className="tarjeta">
          <div className="titulo-tarjeta">Tortuga</div>
          <div className="cuerpo-tarjeta">
            <img className="imagen-tarjeta" src={basura} alt="muestra" />
          </div>
          <div className="link-tarjeta">
            <a href="#">Conocer mas</a>
          </div>
        </div>
      </div>
    </div>

  )
}
