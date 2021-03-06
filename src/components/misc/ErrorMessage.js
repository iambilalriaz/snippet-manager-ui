import React from 'react';
import './ErrorMessage.scss';
const ErrorMessage = ({ message, clear }) => (
  <div className='error-message'>
    <p>{message}</p>
    <button onClick={clear}>Clear</button>
  </div>
);
export default ErrorMessage;
