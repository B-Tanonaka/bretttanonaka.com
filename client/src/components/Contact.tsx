import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import Modal from './ContactModal';
import type { Form } from '../../../interfaces';

export default function Contact() {
  const blankForm: Form = {
    name: '',
    email: '',
    message: '',
  };
  const [form, setForm] = useState(blankForm);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post('/contact-data', form)
      .then(() => {
        setForm(blankForm);
        return (
          <div className="contact-message success">
            <p>Your message has been received and I will back to you as soon as possible</p>
          </div>
        );
      })
      .catch(() => (
        <div className="contact-message fail">
          <p>An error has occurred, please try again.</p>
        </div>
      ));
  };

  return (
    <div className="contact" id="contact">
      <Modal success />
      <div className="contact-container">
        <h1>Contact</h1>
        <hr style={{
          border: '0.03em dashed black',
          boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
          marginBottom: '5%',
        }}
        />
        <form className="form" onSubmit={handleSubmit}>
          <div className="top-row">
            <div className="name-email">
              <label htmlFor="input-name">
                Name*
                <input
                  required
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="input-box-top"
                />
              </label>
            </div>
            <div className="name-email">
              <label htmlFor="input-email">
                Email*
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="input-box-top"
                />
              </label>
            </div>
          </div>
          <div className="form-message">
            <label htmlFor="input-message">
              Message*
              <textarea
                required
                name="message"
                value={form.message}
                rows={10}
                cols={40}
                onChange={(e) => { setForm({ ...form, [e.target.name]: e.target.value }); }}
              />
            </label>
          </div>
          <button type="submit" name="message">Submit</button>
        </form>
      </div>
    </div>
  );
}
