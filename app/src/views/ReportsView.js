import basura from "../images/1.jpg";
import tortuga from "../images/2.jpg";
import alcohol from "../images/3.jpg";

export const ReportsView = () => {

  return (
    <div className="report-container">

      <div>
        <h2 className="title-h2">Reportes</h2>
        <h3 className="title-h3">Aqui podras ver todos tus reportes</h3>
      </div>

      <div>
        <div className="tarjetas">
          <div className="tarjeta">
            <div className="titulo-tarjeta">Tiro basura</div>
            <div className="cuerpo-tarjeta">
              <img className="imagen-tarjeta" src={basura} alt="muestra" />
              <p>lorem ipsum dolor sit amet, lorem ipsum dolor sit ame consectetur adip</p>
            </div>
            <div className="link-tarjeta">
              <a href="../views/ReportView.js">Ver el reporte</a>
            </div>
          </div>

          <div className="tarjeta">
            <div className="titulo-tarjeta">Robo tortugas</div>
            <div className="cuerpo-tarjeta">
              <img className="imagen-tarjeta" src={tortuga} alt="muestra" />
              <p>lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
            <div className="link-tarjeta">
              <a href="../views/ReportView.js">Ver el reporte</a>
            </div>
          </div>

          <div className="tarjeta">
            <div className="titulo-tarjeta">Consume alcohol en la calle</div>
            <div className="cuerpo-tarjeta">
              <img className="imagen-tarjeta" src={alcohol} alt="muestra" />
              <p>lorem ipsum dolor sit amet, consectetur adip</p>
            </div>
            <div className="link-tarjeta">
              <a href="../views/ReportView.js">Ver el reporte</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
