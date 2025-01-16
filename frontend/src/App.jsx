import React from 'react'
import Navbar from './components/Navbar/navbar.jsx'
import { Route, Routes } from 'react-router-dom'
import ApplyReimbursement from './pages/ApplyReimbursement.jsx'
import Home from './pages/Home.jsx'
import EquipmentBooking from './pages/EquipmentBooking.jsx'
import Analytics from './pages/Analytics.jsx'
import "./App.css"
const App = () => {
  return (
    <div>
      <Navbar />
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/analytics' element={<Analytics />}></Route>
          <Route path='/applyReimbursement' element={<ApplyReimbursement />}></Route>
          <Route path='/equipmentBooking' element={<EquipmentBooking />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
