import React, { useState } from "react";
import "./sendemail.css";
import Loader from "../loader/Loader";
import AOS from "aos";

const SendEmail = () => {
  AOS.init();
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 2000);
  return load ? (
    <Loader />
  ) : (
    <div
      className="sendemail"
      data-aos="zoom-in"
      data-aos-offset="200"
      data-aos-once="false"
      data-aos-easing="ease-in"
    >
      <form className="sendemail__form">
        <div className="sendemail__form__group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Enter your name" required />
        </div>

        <div className="sendemail__form__group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="sendemail__form__group">
          <label htmlFor="message">Message</label>
          <textarea name="" id="message" cols="30" rows="5"></textarea>
        </div>

        <div className="sendemail__form__group__button">
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default SendEmail;
