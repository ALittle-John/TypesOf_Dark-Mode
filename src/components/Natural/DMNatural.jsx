import { useState } from 'react';

import './DMNatural.css';
import CmmBlackCircle from "../1CmmBlackCircle/bc";

function DMNatural() {

const [darkMode, setDarkMode] = useState(false)
//If state was created in CmmBlackCircle, it could not be accessed by other components.

const handleDarkModeChange = (e) => {
  setDarkMode(e.target.checked)
}
  return (
    <div className={darkMode ? 'dark-mode-Natural' : ''}>
      <div className='container-Natural'>
        <h3>Natural</h3>
        <CmmBlackCircle checked={darkMode} onchange={handleDarkModeChange}/>
      </div>
    </div>
  )
}

export default DMNatural