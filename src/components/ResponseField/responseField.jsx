import React from 'react';
import './responseField.css';

function ResponseField() {
  return (
    <div className="response-field__wrapper">
      <h className="response-field__title">Response</h>
      <output className="response-field" name="response" />
    </div>
  );
}

export default ResponseField;
