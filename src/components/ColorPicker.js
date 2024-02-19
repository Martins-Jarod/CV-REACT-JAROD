import React, { useState } from "react";
import { ChromePicker } from 'react-color';
import ColorLensIcon from '@mui/icons-material/ColorLens';

function ColorPicker() {
  const [isVisible, setIsVisible] = useState(false); // État pour contrôler la visibilité du color picker
  const [color, setColor] = useState("#FF914D");

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    document.documentElement.style.setProperty('--sidebar-bg-color', color.hex);
    localStorage.setItem('cvColor', color.hex); 
  };

  const toggleColorPicker = () => {
    console.log("Toggle color picker");
    setIsVisible(!isVisible); // Inverse la visibilité du color picker
  };

  return (
    <div className="ColorPicker">
      <button  onClick={toggleColorPicker}>
        <ColorLensIcon />
      </button>
      {isVisible && (
        <ChromePicker color={color} onChangeComplete={handleChangeComplete} />
      )} {/* Affiche le color picker si isVisible est vrai */}
    </div>
  );
}

export default ColorPicker;
