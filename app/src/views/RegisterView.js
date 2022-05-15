import { useDispatch } from "react-redux";
import { useForm } from "../helpers/useForm";
import { startRegister } from "../redux/actions/auth";
import register from "../images/register.svg";
import { Link } from "react-router-dom";

export const RegisterView = () => {
  const [form, setForm, reset] = useForm({ name:"", lastName: "", email: "", password: "", passwordConfirm: "" });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(form.password.trim() !== form.passwordConfirm.trim())
      return alert("Las contraseñas no coinciden");

    dispatch(startRegister({
      name: form.name,
      lastName: form.lastName,
      email: form.email,
      password: form.password,
    }));
    reset();
  }

  return (
    <div className="auth-container register">
      <div className="auth-form-container">
        <h2 className="title-h2">¡Bienvenido!</h2>
        <h3 className="title-h3">Crea una nueva cuenta</h3>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <span className="input-icon"><i className="fa-solid fa-user"></i></span>
            <input className="input-control" type="text" name="name" placeholder="Nombre(s)" required onChange={setForm} value={form.name} />
          </div>
          <div className="input-group">
            <span className="input-icon"><i className="fa-solid fa-user"></i></span>
            <input className="input-control" type="text" name="lastName" placeholder="Apellido(s)" required onChange={setForm} value={form.lastName} />
          </div>
          <div className="input-group">
            <span className="input-icon"><i className="fa-solid fa-at"></i></span>
            <input className="input-control" type="text" name="email" placeholder="Correo electrónico" required onChange={setForm} value={form.email} />
          </div>
          <div className="input-group">
            <span className="input-icon"><i className="fa-solid fa-lock"></i></span>
            <input className="input-control" type="password" name="password" placeholder="Contraseña" required onChange={setForm} value={form.password} />
          </div>
          <div className="input-group">
            <span className="input-icon"><i className="fa-solid fa-lock"></i></span>
            <input className="input-control" type="password" name="passwordConfirm" placeholder="Confirmar contraseña" required onChange={setForm} value={form.passwordConfirm} />
          </div>
          <button className="btn-submit" type="submit">Registrarse</button>
        </form>
        <p className="p-auth">¿Ya tienes cuenta? <Link className="auth-link" to={"/login"}>Inicia sesión</Link></p>
      </div>
      <div className="auth-img-container">
        <img src={register} alt="auth" />
      </div>
    </div>
  )
}
