import React from 'react';
import './form.css';
import Uploadimage from '../../img/uploadfile.png';
import ResponseField from '../ResponseField/responseField';

function Form() {
  return (
    <div className="form">
      <form className="form__input">
        <label htmlFor="name" className="form__input-label">
          Имя:
          <input type="text" className="form__input-name" name="name" placeholder="Константин" />
        </label>
        <label htmlFor="surname" className="form__input-label">
          Фамилия:
          <input
            type="text"
            className="form__input-name"
            name="surname"
            placeholder="Константинопольский"
          />
        </label>
        <label htmlFor="patronymic" className="form__input-label">
          Отчество:
          <input
            type="text"
            className="form__input-name"
            name="patronymic"
            placeholder="Константинович"
          />
        </label>
        <label htmlFor="form__input-file" className="form__input-label">
          Фото:
          <input
            accept="image/*"
            type="file"
            className="form__input-file"
            name="file"
            style={{ display: 'none' }}
            id="form__input-file"
          />
          <span className="form__icon-wrapper">
            <img className="form__icon" src={Uploadimage} alt="icon" width="60" height="56" />
          </span>
        </label>
        <input type="submit" className="form__input-submit" value="Сохранить" />
      </form>
      <ResponseField />
    </div>
  );
}

export default Form;
