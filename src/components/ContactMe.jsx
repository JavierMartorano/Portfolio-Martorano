import React, { useEffect, useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../assets/css/contactMe.css";

const ContactMe = () => {
  const initState = {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    consulta: "",
  };

  const [isSending, setSending] = useState(false);
  const [initialValues, setInitialValues] = useState(initState);

  const onSubmit = (values) => {
    axios({
      method: "POST",
      url: "https://formbold.com/s/9xnGX",
      data: values,
    })
      .then((r) => {
        setSending(true);
        console.log("Recibido");
      })
      .catch((r) => {
        console.log("error");
      });
    // console.log("Values:::", JSON.stringify(values));
  };

  const onError = (error) => {
    console.log("ERROR:::", error);
  };

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: initialValues,
  });

  // useEffect(() => {
  //   const subscription = watch((value, { name, type }) => {
  //     // console.log(">>", value, name, type);
  //     // {1: '1', 2: '9'} '2' 'change'
  //   });

  //   return () => subscription.unsubscribe();
  // }, [watch]);

  return (
    <div className="containerContactMe">
      <h2>Contacto</h2>
      <Container className="my-4 form">
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="formControl"
              type="text"
              placeholder="Nombre"
              {...register("nombre", { required: "El nombre es obligatorio" })}
            />
            {errors.nombre && (
              <Form.Text className="text-danger">
                {errors.nombre.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="formControl"
              type="text"
              placeholder="Apellido"
              {...register("apellido", {
                required: "El apellido es obligatorio",
              })}
            />
            {errors.apellido && (
              <Form.Text className="text-danger">
                {errors.apellido.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="formControl"
              type="email"
              placeholder="Email"
              {...register("email", { required: "El correo es obligatorio" })}
            />
            {errors.email && (
              <Form.Text className="text-danger">
                {errors.email.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="formControl"
              type="tel"
              placeholder="Tel??fono"
              {...register("telefono", {
                required: "El numero de tel??fono es obligatorio",
              })}
            />
            {errors.telefono && (
              <Form.Text className="text-danger">
                {errors.telefono.message}
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              className="formControl"
              as="textarea"
              rows={3}
              placeholder="Consulta"
              {...register("consulta", {
                required: "La consulta es obligatoria",
              })}
            />
            {errors.consulta && (
              <Form.Text className="text-danger">
                {errors.consulta.message}
              </Form.Text>
            )}
          </Form.Group>

          <Button className="enviar" variant="secondary" type="submit" disabled={isSending}>
            {isSending ? "Recibido" : "Enviar"}
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactMe;
