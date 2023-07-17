import React, { Dispatch, SetStateAction } from 'react';

export default function Modal(
  { success, setModalOpen }:
  { success: boolean, setModalOpen: Dispatch<SetStateAction<any>> },
) {
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
          { success
            ? 'Your message has been received.'
            : 'An error has occurred, please try again.'}
        </span>
      </p>
      <button
        type="button"
        className="ok-button"
        style={success ? { backgroundColor: '#309D51' } : { backgroundColor: '#CD4631' }}
        onClick={() => setModalOpen(false)}
      >
        OK
      </button>
    </div>
  );
}
