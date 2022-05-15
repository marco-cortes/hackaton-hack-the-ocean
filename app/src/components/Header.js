import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/ajolote.png";
import { startLogout } from "../redux/actions/auth";

export const Header = () => {

    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();


    const logout = () => {
        dispatch(startLogout());
    }

    const linkActive = (isActive) => {
        return "link " + (isActive ? "link-active" : "");
    }

    const [active, setActive] = useState(false);

    const openLinks = () => {
        document.getElementById("nav-links").classList.toggle("nav-links-active");
        setActive(!active);
    }

    return (
        <nav className="nav">
            <Link className="logo" to={"/"}>
                <img src={logo} className="axolotl" alt="" />
                <span className="logo-title">Green Travel</span>
            </Link>

            <div className="nav-links" id="nav-links">
                {
                    !user ? 
                    <>
                        <NavLink className={({ isActive }) => linkActive(isActive)} to="/">Inicio</NavLink>
                        <NavLink className={({ isActive }) => linkActive(isActive)} to="/about">Acerca de</NavLink>
                        <NavLink className={({ isActive }) => linkActive(isActive)} to="/contact">Contacto</NavLink>
                        <NavLink className={({ isActive }) => linkActive(isActive)} to="/login">Login</NavLink>
                        <NavLink className={({ isActive }) => linkActive(isActive)} to="/register">Registro</NavLink>
                    </> :
                    user.role === "USER_ROLE" ?
                    <>
                        <NavLink className={({ isActive }) => linkActive(isActive)} to="/user/">Destinos</NavLink>
                        <NavLink className={({ isActive }) => linkActive(isActive)} to="/user/report/new">Reportar</NavLink>
                    </>
                    : user.role === "OWNER_ROLE" ?
                    <>
                        <NavLink className={({ isActive }) => linkActive(isActive)} to="/owner/">Mis Destinos</NavLink>
                        <NavLink className={({ isActive }) => linkActive(isActive)} to="/owner/destination/new">Nuevo Destino</NavLink>
                    </>
                    : user.role === "ADMIN_ROLE" ?
                    <>
                        <NavLink className={({ isActive }) => linkActive(isActive)} to="/admin/">Administración</NavLink>
                        <NavLink className={({ isActive }) => linkActive(isActive)} to="/admin/reports">Reportes</NavLink>
                    </>
                    : <></>
                }
                {
                    user && <button className="btn-logout" onClick={logout}>Cerrar sesión</button>
                }

            </div>
            <button className="nav-button" onClick={openLinks}><i className={active ? "fa-solid fa-xmark" : "fa-solid fa-bars" }></i></button>
        </nav>
    )
}
