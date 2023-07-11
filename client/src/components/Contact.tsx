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
      <form>

      </form>
    </div>
  );
}
