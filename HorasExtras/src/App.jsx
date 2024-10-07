import './index.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import AddEvent from './componentes/AddEvent';
import InicialPage from './pages/inicio';
import VerEvent from './pages/VerEvent';

import Menu from './componentes/Navigation';
import { useState } from 'react';
import Month from './pages/Month';
import Profile from './pages/perfil';

const App = () => {
  const location = useLocation(); // Usar useLocation aqui, dentro do Router
  const [currentScreen, setCurrentScreen] = useState(location.pathname); // Estado para a tela atual

  return (
    <>
      <Routes>
        <Route path='/' element={<InicialPage />} />
        <Route path='/AddEvent' element={<AddEvent />} />
        <Route path='/MesEvent' element={<Month />} />
        <Route path='/VerEvent/:id' element={<VerEvent />} />
        <Route path='/Perfil' element={<Profile/>} />
      </Routes>
      <Menu currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </>
  );
};

// Componente Wrapper que inclui o Router
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
