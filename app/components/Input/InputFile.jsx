import React from 'react';
import './Input.less';

const InputFile = ({ label, onChange, name, value }) => (
  <div className="input">
    <label>{label}</label>
    <label className="custom-file-upload">
      <input name={name} type="file" onChange={(e) => onChange({ name, value:e })}/>
      {label}
    </label>
    <div>
      <img src={value} width="50px"/>
      {value ? <span onClick={() => onChange({ name, value: ''})}>Удалить</span> : null}
    </div>
  </div>
)

export default InputFile;
