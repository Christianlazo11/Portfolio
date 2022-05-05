import React, { useState } from "react";
import "./sendemail.css";
import Loader from "../loader/Loader";
import AOS from "aos";
import { Formik, Form, Field, ErrorMessage } from "formik";

const SendEmail = () => {
  AOS.init();
  const [load, setLoad] = useState(true);
  const [isSendForm, setIsSendForm] = useState(false);

  setTimeout(() => {
    setLoad(false);
  }, 2000);
  return load ? (
    <Loader />
  ) : (
    <div
      className="sendemail container"
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-once="false"
      data-aos-easing="ease-in"
    >
      <Formik
        initialValues={{
          name: "",
          email: "",
          message: "",
        }}
        validate={(valores) => {
          let errors = {};
          if (!valores.name) {
            errors.name = "Please enter your name";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errors.name = "The name can only contain letters and spaces";
          }
          if (!valores.email) {
            errors.email = "Please enter an email";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            errors.email =
              "Mail can only contain letters, periods and underscores.";
          }
          if (!valores.message) {
            errors.message = "Please enter a message";
          }

          return errors;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          setIsSendForm(true);
          setTimeout(() => {
            setIsSendForm(false);
          }, 2000);
        }}
      >
        {({ errors }) => (
          <Form className="sendemail__form">
            <div className="sendemail__form__group">
              <label htmlFor="name">Name</label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="name"
                component={() => (
                  <div className="sendemail__form__error">{errors.name}</div>
                )}
              />
            </div>

            <div className="sendemail__form__group">
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="sendemail__form__error">{errors.email}</div>
                )}
              />
            </div>

            <div className="sendemail__form__group">
              <label htmlFor="message">Message</label>
              <Field
                as="textarea"
                name="message"
                id="message"
                cols="30"
                rows="5"
              ></Field>
              <ErrorMessage
                name="message"
                component={() => (
                  <div className="sendemail__form__error">{errors.message}</div>
                )}
              />
            </div>

            <div className="sendemail__form__group__button">
              <button type="submit">Send</button>
              {isSendForm && <div>Formulario Enviado Exitosamente</div>}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SendEmail;
