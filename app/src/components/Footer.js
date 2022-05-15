import { NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <nav className="footer">
        <div className="footer-links">
            <NavLink className="footer-link" to="/contact">Contacto</NavLink>
            <NavLink className="footer-link" to="/about">Sobre nosotros</NavLink>
            <NavLink className="footer-link" to="/login">Terminos y condiciones</NavLink>
        </div>
        <div className="footer-social">
            <i className="fa-brands fa-facebook-square social-icon"></i>
            <i className="fa-brands fa-instagram-square social-icon"></i>
            <i className="fa-brands fa-twitter-square social-icon"></i>
        </div>
        <div className="footer-links">
            <NavLink className="footer-link" to="/owner/register">¡Publica tu destino turistico!</NavLink>
            <NavLink className="footer-link" to="/admin/register">Administración</NavLink>
            <a className="footer-link" href="#a">FAQ</a>
        </div>
    </nav>
  )
}
