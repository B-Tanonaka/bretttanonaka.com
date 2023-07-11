import React, { useState } from 'react';
import type { Form } from '../../../interfaces';

export default function Contact() {
  const formStructure: Form = {
    name: '',
    email: '',
    message: '',
  };
  const [form, setForm] = useState(formStructure);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact</h1>
        <hr style={{
          border: '0.03em dashed black',
          boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
          marginBottom: '5%',
        }}
        />
        <form className="form">
          <div className="top-row">
            <div className="name-email">
              <label htmlFor="input-name">
                Name
                <input
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
                Email
                <input
                  type="text"
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
              Message
              <textarea
                name="message"
                value={form.message}
                rows={10}
                cols={40}
                onChange={(e) => { setForm({ ...form, [e.target.name]: e.target.value }); }}
              />
            </label>
          </div>
          <input
            type="button"
            name="message"
            value="Submit"
            onClick={(e) => { console.log(form); }}
          />
        </form>
      </div>
    </div>
  );
}
