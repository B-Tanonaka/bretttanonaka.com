import React from 'react';

export default function Modal({ success }: { success: boolean }) {
  const icon = success ? 'fa-solid fa-circle-check' : 'fa-solid fa-circle-xmark';
  return (
    <div className="contact-message">
      <i
        className={`${icon} contact-icon`}
        style={success
          ? { color: '#309D51' } : { color: '#CD4631' }}
      />
      <p>
        <span className="title-text">
          {success ? 'Thank you!' : 'Sorry!'}
        </span>
        <span style={{ fontSize: '0.7rem' }}>
          Your message has been received.
        </span>
      </p>
      <button type="button" className="ok-button">OK</button>
    </div>
  );
}
