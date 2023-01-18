import * as React from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col
} from "react-bootstrap";

import { useForm } from "react-hook-form";
import "../assets/css/contactMe.css";

const ContactMe = () => {
  const initState = {
    email: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false
  };

  // eslint-disable-next-line no-unused-vars
  const [initialValues, setInitialValues] = React.useState(initState);

  const onSubmit = (values) => {
    console.log("Values:::", values);
    console.log("Values:::", JSON.stringify(values));
  };

  const onError = (error) => {
    console.log("ERROR:::", error);
  };

  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors }
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onSubmit",
    // reValidateMode: "onChange",
    defaultValues: initialValues
  });

  // const x = JSON.stringify(data);
  // const y = JSON.stringify(listShow);

  React.useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      console.log(">>", value, name, type);
      // {1: '1', 2: '9'} '2' 'change'
    });

    return () => subscription.unsubscribe();
  }, [watch]);
    
  return (
    <div className="containerContactMe">
      <h2>Contacto</h2>
      <Container className="my-4 form">
      <Form onSubmit={handleSubmit(onSubmit, onError)}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su nombre"
            {...register("email", { required: "El nombre es obligatorio" })}
          />
          {errors.email && (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese su apellido"
            {...register("email", { required: "El apellido es obligatorio" })}
          />
          {errors.email && (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresar correo"
            {...register("email", { required: "El correo es obligatorio" })}
          />
          {errors.email && (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Ingresar su teléfono"
            {...register("email", { required: "El numero de teléfono es obligatorio" })}
          />
          {errors.email && (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Consulta</Form.Label>
          <Form.Control
            as="textarea" rows={3}
            placeholder="Ingrese su consulta"
            {...register("email", { required: "La consulta es obligatoria" })}
          />
          {errors.email && (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>

    </div>
  );
};

export default ContactMe;
