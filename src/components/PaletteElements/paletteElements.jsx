import React from 'react';

import './paletteElements.css';
import PaletteElement from '../PletteElement/paletteElement';

function PaletteElements({ colors }) {
  return (
    <div className="palette-elements">
      {colors.map((color) => (
        <PaletteElement color={color.color} key={color.id} id={color.id} />
      ))}
    </div>
  );
}

export default PaletteElements;
