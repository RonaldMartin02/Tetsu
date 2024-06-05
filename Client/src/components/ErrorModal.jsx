import React from 'react';
import './scss/ErrorModal.scss'
const ErrorModal = ({ errorMessage, onClose,errorType }) => {
  return (
    <div className="modal">
      <div className="modal_content">
        <div className='modal_header'>
        <h4 className='modal_title'> {errorType} Error Occured</h4>
        <span className="modal_close" onClick={onClose}>&times;</span>
        </div>
        <p className='modal_message'>{errorMessage}</p>
      </div>
    </div>
  );
};

export default ErrorModal;
