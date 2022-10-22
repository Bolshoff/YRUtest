import React from 'react';
import './responseField.css';

function ResponseField({ msg, status }) {
  return (
    <div className="response-field__wrapper">
      <p className="response-field__title">Response</p>
      <output className="response-field" name="response">
        <p>{status}</p>
        <p>{msg}</p>
      </output>
    </div>
  );
}

export default ResponseField;
