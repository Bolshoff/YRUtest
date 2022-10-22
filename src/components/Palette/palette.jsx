import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addColor } from './paletteSlice';
import './palette.css';
import PaletteElements from '../PaletteElements/paletteElements';

function Palette() {
  const [color, setColor] = useState('#ff9900');

  const colors = useSelector((state) => state.palette);

  const dispatch = useDispatch();

  function createDefaultColor() {
    dispatch(addColor(color));
  }

  return (
    <div className="palette">
      <PaletteElements colors={colors} />
      <form className="palette__input">
        <label htmlFor="palette__input-color" className="palette__input-label">
          <input
            type="color"
            className="palette__input-color"
            name="color"
            value={color}
            style={{ display: 'none' }}
            id="palette__input-color"
            onChange={(e) => setColor(e.target.value)}
          />
          <span className="palette__input-button" role="presentation" onClick={createDefaultColor}>
            <p>Добавить цвет</p>
          </span>
        </label>
      </form>
    </div>
  );
}

export default Palette;
