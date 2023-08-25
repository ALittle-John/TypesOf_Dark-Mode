import { useState } from 'react';

import './DMCurtain.css';
import CmmBlackCircle from "../1CmmBlackCircle/bc";

function DMCurtain() {

const [darkMode, setDarkMode] = useState(false)

const handleDMChangeCurtain = (e) => {
  setDarkMode(e.target.checked)
}
//Associate with the "checked", "useDarkMode" is responsible for actualizating the state.

  return (
    <div className={darkMode ? 'dark-mode-Curtain' : ''}>
      <div className='container-Curtain'>
        <h3>Curtain</h3>
        <CmmBlackCircle checked={darkMode} onchange={handleDMChangeCurtain}/>
      </div>
    </div>
  )
}

export default DMCurtain