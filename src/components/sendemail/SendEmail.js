import React, { useState, useRef } from "react";
import "./sendemail.css";
import Loader from "../loader/Loader";
import AOS from "aos";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Modal from "../modal/Modal";
import emailjs from "@emailjs/browser";
import useGlobalData from "../../hooks/useGlobalData";

const SendEmail = () => {
  AOS.init();
  const [load, setLoad] = useState(true);
  const [isModal, setIsModal] = useState(false);
  const form = useRef();
  const { globalData, language } = useGlobalData();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_zpxwa1h",
        "template_fx0ff2h",
        form.current,
        "KWav6B5QmBymefyPU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
            language === "english"
              ? (errors.name = "Please enter your name")
              : (errors.name = "Por favor ingrese su nombre");
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
            errors.name = "The name can only contain letters and spaces";
          }
          if (!valores.email) {
            language === "english"
              ? (errors.email = "Please enter your email")
              : (errors.email = "Por favor ingrese su correo");
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.email
            )
          ) {
            language === "english"
              ? (errors.email =
                  "Mail can only contain letters, periods and underscores.")
              : (errors.email =
                  "El correo sólo puede contener letras, puntos y guiones bajos.");
          }
          if (!valores.message) {
            language === "english"
              ? (errors.message = "Please enter a message")
              : (errors.message = "Por favor ingrese un mensaje");
          }

          return errors;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();
          sendEmail();
          setIsModal(!isModal);
        }}
      >
        {({ errors }) => (
          <Form ref={form} className="sendemail__form">
            <div className="sendemail__form__group">
              <label className="sendemail__form__group__label" htmlFor="name">
                {globalData[language].formContactData.text01}
              </label>
              <Field
                id="name"
                name="name"
                type="text"
                placeholder={globalData[language].formContactData.placeholder01}
              />
              <ErrorMessage
                name="name"
                component={() => (
                  <div className="sendemail__form__error">{errors.name}</div>
                )}
              />
            </div>

            <div className="sendemail__form__group">
              <label className="sendemail__form__group__label" htmlFor="email">
                {globalData[language].formContactData.text02}
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder={globalData[language].formContactData.placeholder02}
              />
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="sendemail__form__error">{errors.email}</div>
                )}
              />
            </div>

            <div className="sendemail__form__group">
              <label
                className="sendemail__form__group__label"
                htmlFor="message"
              >
                {globalData[language].formContactData.text03}
              </label>
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
              <button type="submit">
                {globalData[language].formContactData.textButton}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {isModal && (
        <Modal handleModal={setIsModal} handleHeader={false}>
          <h3>
            {language === "english"
              ? "mail sent successfully"
              : "correo enviado con éxito"}
          </h3>
          <p className="overlay__modal__content__text">
            {language === "english"
              ? "I will contact you soon 😄"
              : "Me pondré en contacto contigo pronto 😄"}
          </p>
        </Modal>
      )}
    </div>
  );
};

export default SendEmail;
