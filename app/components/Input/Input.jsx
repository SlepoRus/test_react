import React from 'react';
import './Input.less';


const Input = ({ label, type, placeholder,  onChange, name, value }) => (
  <div className="input">
    <label>{label}</label>
    <input type={type} placeholder={placeholder} name={name} value={value} onChange={(e) => onChange({ name, value:e.target.value })}/>
  </div>
)

export default Input;
