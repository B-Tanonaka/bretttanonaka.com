import React from 'react';

export default function Modal() {
  return (
    <div className="contact-message success">
      <i
        className="fa-solid fa-circle-check"
        style={{
          fontSize: '2.5rem',
          color: '#309D51',
          marginTop: '1rem',
        }}
      />
      <p>
        <span className="thank-you">Thank you!</span>
        <span style={{ fontSize: '0.7rem' }}>
          Your message has been received.
        </span>
      </p>
      <button type="button" className="ok-button">OK</button>
    </div>
  );
}
