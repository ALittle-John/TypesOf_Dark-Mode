/* eslint-disable react/prop-types */
import './bc.css'

import '../Natural/DMNatural'
import '../Curtain/DMCurtain'

function CmmBlackCircle({checked, onchange}) {
//It was necessary to take the state "check" to a higher level, as a prop, to take it for all files.
//CmmBlackCircle is only responsible for rendering a checkbox and reciving the values of "checked" and "onchange".
  return (
    <label htmlFor="BlackCircle">
      <input
      type="checkbox"
      name="BlackCircle"
      checked={checked}
      onChange={onchange}
      />
    </label>
  )
}

export default CmmBlackCircle