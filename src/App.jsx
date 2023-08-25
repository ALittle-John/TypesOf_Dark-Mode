import './App.css'
import DMCurtain from './components/Curtain/DMCurtain'

import DMNatural from './components/Natural/DMNatural'

function App() {
  
  return (
    <>
      <DMNatural/>
      <DMCurtain/>
    </>
  )
}
/* Descobri um bug: O dark mode está agindo da mesma forma, pegando apenas 1 tipo de dark mode e não conforme o arquivo designado. */

export default App