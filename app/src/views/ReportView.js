import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useForm } from "../helpers/useForm";

export const ReportView = () => {

  const { id } = useParams();
  const { _id } = useSelector(state => state.auth.user);

  const [form, setForm, resetForm, setValues] = useForm({
    title: "",
    text: "",
    files: [],
    destination: id,
    user: _id
  });

  const submitReport = (e) => {
    e.preventDefault();
    console.log(form);
    resetForm();
  }

  const setFiles = (e) => {
    const files = e.target.files;
    setValues({
      ...form,
      files: Array.from(files)
    });
  }

  return (
    <form onSubmit={submitReport} className="form-report">
      <h2 className="title-h2 mb-2">Levantar reporte</h2>
      <label className="report-label mb-1">Titulo:</label>
      <input className="report-input" type="text" name="title" placeholder="Titulo" value={form.title} onChange={setForm} />
      <label className="report-label mb-1">Descripción:</label>
      <textarea  className="report-input" rows={3} name="text" placeholder="Descripción" value={form.text} onChange={setForm} />
      <label className="report-label mb-1">Archivos adjuntos:</label>
      <label htmlFor="input-files" className="report-input input-files mb-3">
        {
          form.files.length <= 0 ?
          <>
            <i className="fa-solid fa-photo-film input-file-icon"></i>
          </> : null
        }
      </label>
      <input id="input-files" type="file" name="files" multiple onChange={setFiles} />
      <button className="btn-submit mb-1">Enviar</button>
    </form>
  )
}
