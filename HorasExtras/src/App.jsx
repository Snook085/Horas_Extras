
import './index.css'
import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom'
import AddEvent from './componentes/AddEvent'
import InicialPage from './pages/inicio'
import VerEvent from './pages/VerEvent'
import Cards from './pages/Cards'

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<InicialPage/>} />
          <Route path='/AddEvent'  element={<AddEvent/>} />
          <Route path='/MesEvent'  element={<Cards/>} />
          <Route path='/VerEvent'  element={<VerEvent/>} />
        </Routes>
        
      </Router>
      
    </>
  )
}

export default App
