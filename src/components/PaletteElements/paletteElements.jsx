import React from 'react';

import './paletteElements.css';
import PaletteElement from '../PletteElement/paletteElement';

function PaletteElements({ colors }) {
  return (
    <div className="palette-elements">
      {colors.map((color, i) => (
        <PaletteElement color={color.color} key={color.id} id={color.id} index={i} />
      ))}
    </div>
  );
}

export default PaletteElements;
