import { useState } from 'react'
import './index.css'
import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom'
import AddEvent from './componentes/AddEvent'
import InicialPage from './pages/inicio'
import VerEvent from './pages/VerEvent'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<InicialPage/>} />
          <Route path='/AddEvent'  element={<AddEvent />} />
          <Route path='/VerEvent'  element={<VerEvent/>} />
        </Routes>
        
      </Router>
      
    </>
  )
}

export default App
