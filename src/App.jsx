import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Sofas from './Components/Sofas'
import Head_nav from './Components/Head_nav'
import Sofabeds from './Components/Sofabeds'
import Chaisesofas from './Components/Chaisesofas'
import Cornersofas from './Components/Cornersofas'
import Modularsofas from './Components/Modularsofas'
import Ottomans from './Components/Ottomans'
import Armchairs from './Components/Armchairs'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Head_nav/>}></Route>
        <Route path="/sofas" element={<Sofas />}></Route>
        <Route path="/sofa-beds" element={<Sofabeds />}></Route>
        <Route path="/chaise-sofas" element={<Chaisesofas />}></Route>
        <Route path="/corner-sofas" element={<Cornersofas />}></Route>
        <Route path="/modular-sofas" element={<Modularsofas />}></Route>
        <Route path="/ottomans" element={<Ottomans />}></Route>
        <Route path="/armchairs" element={<Armchairs />}></Route>
      </Routes>
    </>
  )
}

export default App