import React from 'react';
import { Input, TextArea, Select, InputFile } from '../';
import './TopBar.less';
const TopBar = ({ handleAdd, error, handleChange, title, phone, text, city, image, handleFile }) => (
  <div>
    <form onSubmit={handleAdd}>
      <div className="top-board">
        <h1>Доска объявлений в москве</h1>
        <button >Добавить объявление</button>
        <span className="error-board">{ error }</span>
      </div>
      <div className="add-form">
        <div>
          <Input type="text" placeholder="Название" label="Название*" name="title" onChange={handleChange} value={title} />
          <Input type="text" placeholder="+7xxxxxxxxxx" label="Телефон*" name="phone" onChange={handleChange} value={phone} />
          <i>* Обязательны </i>
        </div>
        <div>
          <TextArea placeholder="Описание" rows="4" label="Описание" name="text" onChange={handleChange} value={text} />
        </div>
        <div>
          <Select placeholder="Город" label="Город" name="city" onChange={handleChange} value={city} />
        </div>
        <div>
          <InputFile label="Загрузить картинку" name="image" onChange={handleFile} value={image} />
        </div>
        <div>
          <button className="mobile-button">{error || "Добавить объявление"}</button>
        </div>
      </div>
    </form>
  </div>
)

export default TopBar;
