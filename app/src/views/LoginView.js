import { useDispatch } from "react-redux";
import { useForm } from "../helpers/useForm";
import { startLogin } from "../redux/actions/auth";
import { Link } from "react-router-dom";
import login from "../images/login.svg";

export const LoginView = () => {

  const [form, setForm, reset] = useForm({ email: "", password: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLogin(form.email, form.password));
    reset();
  }

  return (
    <div className="auth-container">
      <div className="auth-img-container">
        <img src={login} alt="auth" />
      </div>
      <div className="auth-form-container">
        <h2 className="title-h2">¡Bienvenido!</h2>
        <h3 className="title-h3">Inicia sesión con tu cuenta</h3>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon"><i className="fa-solid fa-at"></i></span>
            <input className="input-control" type="text" name="email" placeholder="Correo electrónico" required onChange={setForm} value={form.email} />
          </div>
          <div className="input-group">
            <span className="input-icon"><i className="fa-solid fa-lock"></i></span>
            <input className="input-control" type="password" name="password" placeholder="Contraseña" required onChange={setForm} value={form.password} />
          </div>
          <button className="btn-submit" type="submit">Iniciar sesión</button>
        </form>
        <p className="p-auth">¿No tienes cuenta? <Link className="auth-link" to={"/register"}>Registrate</Link></p>
      </div>
    </div>
  )
}
