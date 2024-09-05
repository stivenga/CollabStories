

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./RegisterForm.css"; 


const schema = yup.object().shape({
  username: yup.string().required("El nombre de usuario es obligatorio"),
  email: yup
    .string()
    .email("Debe ser un correo válido")
    .required("El correo es obligatorio"),
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    .matches(/[a-z]/, "Debe contener al menos una letra minúscula")
    .matches(/[A-Z]/, "Debe contener al menos una letra mayúscula")
    .matches(/\d/, "Debe contener al menos un número"),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("Usuario registrado con éxito");

  };

  return (
    <div className="form-container">
      <div className="register-form">
        <h2>Registro de Usuario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="username">Nombre de Usuario</label>
            <input id="username" {...register("username")} />
            <p className="error-message">{errors.username?.message}</p>
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input id="email" {...register("email")} />
            <p className="error-message">{errors.email?.message}</p>
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" {...register("password")} />
            <p className="error-message">{errors.password?.message}</p>
          </div>

          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
