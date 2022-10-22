import React, { useState } from 'react';
import './paletteElement.css';
import { useDispatch } from 'react-redux';

import { changeColor, removeColor } from '../Palette/paletteSlice';

function PaletteElement({ color, id }) {
  const [newColor, setNewColor] = useState('#ff9900');
  const dispatch = useDispatch();

  const divStile = {
    backgroundColor: `${color}`,
    height: '54px',
    width: '54px',
  };
  function changeElementColor(e) {
    setNewColor(e.target.value);
    dispatch(changeColor(newColor));
  }
  function deleteColor() {
    dispatch(removeColor(id));
  }

  return (
    <div className="palette-element">
      <label htmlFor="palette__element-color" className="palette__element-label">
        <input
          type="color"
          className="palette__element-color"
          name="color"
          value={newColor}
          id="palette__element-color"
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
