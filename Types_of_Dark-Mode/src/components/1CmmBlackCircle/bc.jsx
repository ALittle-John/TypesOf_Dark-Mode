import { useState } from 'react'

import './bc.css'

function CmmBlackCircle() {

  const [checked, setChecked] = useState(false)
  if(checked) {
    document.body.classList.toggle('dark')
  } else {
    document.body.classList.remove('dark')
  }

  return (
    <>
      <label htmlFor="BlackCircle">
        <input
        type="checkbox"
        name="BlackCircle"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        />
      </label>
    </>
  )
}

export default CmmBlackCircle