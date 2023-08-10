import { useState } from 'react';

import './DMCurtain.css';
import CmmBlackCircle from "../1CmmBlackCircle/bc";

function DMCurtain() {

const [darkMode, setDarkMode] = useState(false)

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

export default DMCurtain