import { Link, NavLink } from "react-router-dom";
import logo from "../images/ajolote.png";

export const Header = () => {

    const linkActive = (isActive) => {
        return "link " + (isActive ? "link-active" : "");
    }

    return (
        <nav className="nav tittles">
            <Link className="logo" to={"/"}>
                <img src={logo} className="axolotl" alt="" />
                <span className="logo-title">Green Travel</span>
            </Link>

            <div className="nav-links">
                <NavLink className={({ isActive }) => linkActive(isActive)} to="/">Inicio</NavLink>
                <NavLink className={({ isActive }) => linkActive(isActive)} to="/about">Sobre nosotros</NavLink>
                <NavLink className={({ isActive }) => linkActive(isActive)} to="/contact">Contacto</NavLink>
                <NavLink className={({ isActive }) => linkActive(isActive)} to="/login">Login</NavLink>
                <NavLink className={({ isActive }) => linkActive(isActive)} to="/register">Register</NavLink>
            </div>
        </nav>
    )
}
