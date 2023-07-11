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
      <h1>Contact</h1>
      <hr style={{
        border: '0.03em dashed black',
        boxShadow: '5px 2px 5px 0.5px hsl(0deg 0% 0% / 22%)',
      }}
      />
      <form className="form">
        <div className="form-name">
          Name
          <input type="text" name="name" value={form.name} onChange={handleChange} />
        </div>
        <div className="form-email">
          Email
          <input type="text" name="email" value={form.email} onChange={handleChange} />
        </div>
        <div className="form-message">
          Message
          <input type="text" name="message" value={form.message} onChange={handleChange} />
        </div>
      </form>
    </div>
  );
}
