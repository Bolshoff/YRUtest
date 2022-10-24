import React, { useState } from 'react';
import './paletteElement.css';
import { useDispatch } from 'react-redux';

import { changeColor, removeColor } from '../Palette/paletteSlice';

function PaletteElement({ id }) {
  const [color, setColor] = useState('#ff9900');
  const dispatch = useDispatch();

  const divStile = {
    backgroundColor: `${color}`,
    height: '54px',
    width: '54px',
  };

  function changeElementColor(e) {
    setColor(e.target.value);

    dispatch(changeColor({ id, color }));
  }
  function deleteColor() {
    dispatch(removeColor(id));
  }

  return (
    <div className="palette-element">
      <label htmlFor={id} className="palette__element-label">
        <input
          type="color"
          className="palette__element-color"
          name="color"
          value={color}
          id={id}
          onChange={changeElementColor}
        />
        <span className="elem" style={divStile} role="presentation">
          <button className="elem__button-close" type="button" onClick={deleteColor}>
            X
          </button>
        </span>
      </label>
    </div>
  );
}

export default PaletteElement;
