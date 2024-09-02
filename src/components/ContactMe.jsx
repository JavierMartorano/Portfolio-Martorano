import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const initState = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    consulta: "",
  };

  const [isSending, setSending] = useState(false);
  const [isSent, setSent] = useState(false); // Estado para manejar el mensaje de éxito

  const onSubmit = (values) => {
    setSending(true);
    axios({
      method: "POST",
      url: "https://formbold.com/s/9xnGX",
      data: values,
    })
      .then(() => {
        console.log("Recibido");
        setSent(true); // Actualiza el estado para mostrar el mensaje de éxito
      })
      .catch(() => {
        console.log("Error");
      })
      .finally(() => {
        setSending(false);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm({
    mode: "onBlur",
    defaultValues: initState,
  });

  return (
    <div className="py-16 bg-custom-bg text-white">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 animate-fadeIn">
          ¿Quieres trabajar conmigo? ¡Contáctame!
        </h2>
        <p className="text-center mb-12 text-lg animate-fadeIn">
          Estoy siempre dispuesto a escuchar nuevas ideas y proyectos. Completa
          el formulario y estaré en contacto contigo lo antes posible.
        </p>
        
        {/* Mensaje de confirmación de envío */}
        {isSent && (
          <div className="bg-green-600 text-white text-center p-4 rounded-lg mb-6">
            ¡Tu mensaje ha sido enviado correctamente! Me pondré en contacto contigo pronto.
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 animate-slideIn"
        >
          <div>
            <input
              type="text"
              placeholder="Nombre"
              className={`border border-white w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                errors.nombre ? "ring-red-500" : "ring-transparent"
              }`}
              {...register("nombre", { required: "El nombre es obligatorio" })}
            />
            {errors.nombre && isSubmitted && (
              <p className="text-red-500 mt-2">{errors.nombre.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              placeholder="Apellido"
              className={`border border-white w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                errors.apellido ? "ring-red-500" : "ring-transparent"
              }`}
              {...register("apellido", {
                required: "El apellido es obligatorio",
              })}
            />
            {errors.apellido && isSubmitted && (
              <p className="text-red-500 mt-2">{errors.apellido.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              className={`border border-white w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                errors.email ? "ring-red-500" : "ring-transparent"
              }`}
              {...register("email", { required: "El correo es obligatorio" })}
            />
            {errors.email && isSubmitted && (
              <p className="text-red-500 mt-2">{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              placeholder="Teléfono"
              className={`border border-white w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                errors.telefono ? "ring-red-500" : "ring-transparent"
              }`}
              {...register("telefono", {
                required: "El número de teléfono es obligatorio",
              })}
            />
            {errors.telefono && isSubmitted && (
              <p className="text-red-500 mt-2">{errors.telefono.message}</p>
            )}
          </div>

          <div>
            <textarea
              rows="4"
              placeholder="Consulta"
              className={`border border-white w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                errors.consulta ? "ring-red-500" : "ring-transparent"
              }`}
              {...register("consulta", {
                required: "La consulta es obligatoria",
              })}
            ></textarea>
            {errors.consulta && isSubmitted && (
              <p className="text-red-500 mt-2">{errors.consulta.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className={`border border-white bg-teal-600 hover:bg-teal-500 text-white py-3 px-6 rounded-lg transition-all ${
                isSending ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSending}
            >
              {isSending ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
