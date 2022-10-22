import React from 'react';
import './responseField.css';

function ResponseField() {
  return (
    <div className="response-field__wrapper">
      <p className="response-field__title">Response</p>
      <output className="response-field" name="response" />
    </div>
  );
}

export default ResponseField;
