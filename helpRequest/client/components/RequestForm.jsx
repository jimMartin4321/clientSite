import React from 'react';
import InputFieldTemplate from './InputFieldTemplate';

const RequestForm = (props) => {
  const { onChange, onSubmit } = props;
  return (
    <div className="requestForm">
      <div className="formTitle"><h3>Submit a request</h3></div>
      <div className="formContainer">
        <InputFieldTemplate label={'Name'} className={'name'} onChange={onChange} />
        <InputFieldTemplate label={'Phone Number'} className={'phone'} onChange={onChange} />
        <InputFieldTemplate label={'Subject'} className={'subject'} onChange={onChange} />
        <InputFieldTemplate label={'Description'} className={'description'} onChange={onChange} />
        <button type="button" onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default RequestForm;
