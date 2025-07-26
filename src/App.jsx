import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Sofas from './Components/Sofas/index'
import Head_nav from './Components/Head_Nav/index'
import Sofabeds from './Components/Sofabeds/index'
import Chaisesofas from './Components/Chaisesofas/index'
import Cornersofas from './Components/Cornersofas/index'
import Modularsofas from './Components/Modularsofas/index'
import Ottomans from './Components/Ottomans/index'
import Armchairs from './Components/Armchairs/index'
import Register from '../pages/Register'
import Login from '../pages/Login'
import AdminPage from '../src/Components/Admin'
import Category from './Components/AdminPages/Category'
import Dashboard from './Components/AdminPages/Dashboard'
import UserList from './Components/AdminPages/UserList'
import AddCategory from './Components/AdminPages/AddCategoty'
import ProtectedRoute from '../routes/protectedRoutes'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Head_nav/>}></Route>
        <Route path="/sofas" element={<ProtectedRoute><Sofas /></ProtectedRoute>}></Route>
        <Route path="/sofa-beds" element={<Sofabeds />}></Route>
        <Route path="/chaise-sofas" element={<Chaisesofas />}></Route>
        <Route path="/corner-sofas" element={<Cornersofas />}></Route>
        <Route path="/modular-sofas" element={<Modularsofas />}></Route>
        <Route path="/ottomans" element={<Ottomans />}></Route>
        <Route path="/armchairs" element={<Armchairs />}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>

        <Route path="/admin" element={<ProtectedRoute><AdminPage /></ProtectedRoute>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="categories" element={<Category />} />
          <Route path="users" element={<UserList />} />
          <Route path="addcategory" element={<AddCategory/>}/>
        </Route>
     
        
      </Routes>
    </>
  )
}

export default App