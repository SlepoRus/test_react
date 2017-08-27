import React from 'react';
import './Input.less';

let city = ['Нет города', 'Москва', 'Санкт-Петербург', 'Краснодар', 'Ейск', 'Воронеж', 'Ростов-на-Дону', 'Луга', 'Калуга', 'Тверь'];

const Select = ({ label, onChange, name, value }) => (
  <div className="input">
    <label>{label}</label>
    <select name={name} value={value} onChange={(e) => onChange({ name, value:e.target.value })}>
      {city.map((val,key) => (
        <option key={key}> {val} </option>
      ))}
    </select>
  </div>
)

export default Select;
