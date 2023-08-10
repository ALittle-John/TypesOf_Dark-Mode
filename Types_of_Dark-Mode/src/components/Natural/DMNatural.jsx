import { useState } from 'react';

import './DMNatural.css';
import CmmBlackCircle from "../1CmmBlackCircle/bc";

function DMNatural() {
//The DMNatural (or any other file) is the component that needs to track and manage the dark mode state
const [darkMode, setDarkMode] = useState(false)
//If state was created in CmmBlackCircle, it could not be accessed by other components.

const handleDarkModeChange = (e) => {
  setDarkMode(e.target.checked)
}
//Associate with the "checked", "useDarkMode" is responsible for actualizating the state.
  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <CmmBlackCircle checked={darkMode} onchange={handleDarkModeChange}/>
    </div>
  )
}

export default DMNatural