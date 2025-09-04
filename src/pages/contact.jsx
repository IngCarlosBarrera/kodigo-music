// src/pages/Contact.jsx
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
  };

  return (
    <div className="container">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre:</label>
          <input {...register("name", { required: "Nombre requerido" })} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input
            {...register("email", {
              required: "Email requerido",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email inválido",
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Mensaje:</label>
          <textarea {...register("message", { required: "Mensaje requerido" })} />
          {errors.message && <p>{errors.message.message}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contact;
