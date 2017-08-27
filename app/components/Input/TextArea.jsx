import React from 'react';
import './Input.less';

const TextArea = ({ label, rows, placeholder, onChange, name, value }) => (
  <div className="input">
    <label>{label}</label>
    <textarea name={name} value={value} rows={rows} placeholder={placeholder} onChange={(e) => onChange({ name, value:e.target.value })}></textarea>
  </div>
)

export default TextArea;
