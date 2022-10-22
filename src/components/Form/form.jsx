import React, { useEffect, useState } from 'react';
import './form.css';
import Uploadimage from '../../img/uploadfile.png';
import ResponseField from '../ResponseField/responseField';

function Form() {
  const POST_URL = 'https://test-job.pixli.app/send.php';
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [patronymic, setPatronymic] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [response, setResponse] = useState({});

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  function submitForm(e) {
    e.preventDefault();

    const data = new FormData();
    data.set('action', 'send_data');
    data.set('id', 1);
    data.set('image', selectedImage);
    data.set('contact[name]', name);
    data.set('contact[surname]', surname);
    data.set('contact[patronymic]', patronymic);

    fetch(POST_URL, {
      method: 'POST',
      body: data,
    })
      .then((res) => res.json())
      .then((resp) => {
        setResponse(resp);
      });
  }

  return (
    <div className="form">
      <form className="form__input" onSubmit={submitForm}>
        <label htmlFor="name" className="form__input-label">
          Имя:
          <input
            type="text"
            className="form__input-name"
            name="name"
            placeholder="Константин"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="surname" className="form__input-label">
          Фамилия:
          <input
            type="text"
            className="form__input-name"
            name="surname"
            placeholder="Константинопольский"
            onChange={(e) => setSurName(e.target.value)}
          />
        </label>
        <label htmlFor="patronymic" className="form__input-label">
          Отчество:
          <input
            type="text"
            className="form__input-name"
            name="patronymic"
            placeholder="Константинович"
            onChange={(e) => setPatronymic(e.target.value)}
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
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
          <span className="form__icon-wrapper">
            <img
              className="form__icon"
              src={imageUrl === null ? Uploadimage : imageUrl}
              alt={setSelectedImage.name}
              width="60"
              height="56"
            />
          </span>
        </label>
        <input type="submit" className="form__input-submit" value="Сохранить" />
      </form>
      <ResponseField msg={response.msg} status={response.status} />
    </div>
  );
}

export default Form;
