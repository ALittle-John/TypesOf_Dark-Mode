import './App.css'
import DMCurtain from './components/Curtain/DMCurtain'

import DMNatural from './components/Natural/DMNatural'

function App() {
  
  return (
    <>
      {/* <div className='camada0'> */}
        <DMNatural/>
      {/* </div> */}
      {/* <div className='camada1'> */}
        <DMCurtain/>
      {/* </div> */}
      {/* <div className='camada2'> */}
        <DMNatural/>
      {/* </div> */}
      {/* <div className='camada3'> */}
        <DMNatural/>
      {/* </div> */}
      {/* <div className='camada4'> */}
        <DMCurtain/>
      {/* </div> */}
      {/* <div className='camada5'> */}
        <DMNatural/>
      {/* </div> */}
    </>
  )
}

export default App