import React, { useState, useEffect } from 'react';
import './Footer.scss';

import { AppWrap, MotionWrap } from '../../AppWrapper';
import { client, urlFor } from '../../client';
import { images } from '../../constants';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmiting, setIsSubmiting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const contact = {
      _type: 'contact',
      name,
      email,
      message,
    };

    client.create(contact).then(() => {
      setIsLoading(false);
      setIsSubmiting(true);
    });
  };

  return (
    <>
      <h2 className="head-text">
        Take a <span>Coffee</span> & chat with me
      </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a className="p-text" href="mailto:jonytalukdar30gmail.com">
            jonytalukdar30gmail
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a className="p-text" href="tel: 017000000">
            0170000000
          </a>
        </div>

        {!isSubmiting ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                name="name"
                onChange={handleChangeInput}
                className="p-text"
              />
            </div>
            <div className="app__flex">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                name="email"
                onChange={handleChangeInput}
                className="p-text"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              ></textarea>
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>
              {isLoading ? 'Sending' : 'Send Message'}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">Thank you for getting in touch!</h3>
          </div>
        )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
  true
);
