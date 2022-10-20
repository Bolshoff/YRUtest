import React from 'react';
import './palette.css';

function Palette() {
  return (
    <div className="palette">
      <form className="palette__input">
        <label htmlFor="palette__input-color" className="palette__input-label">
          <input
            type="color"
            className="palette__input-color"
            name="color"
            style={{ display: 'none' }}
            id="palette__input-color"
          />
          <span className="palette__input-button">
            <p>Добавить цвет</p>
          </span>
        </label>
      </form>
    </div>
  );
}

export default Palette;
