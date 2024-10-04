import React from 'react';
import { useNavigate } from 'react-router-dom';
import home from '../../../public/home.svg'
import albums from '../../../public/albums.svg'
import settings from '../../../public/settings.svg'
import addCircle from '../../../public/addCircle.svg'

const Menu = ({ currentScreen, setCurrentScreen }) => {
  const navigate = useNavigate();

  const Menus = [
    { name: 'Home', icon: home, path: '/' },
    { name: 'Add Event', icon: addCircle, path: '/AddEvent' },
    { name: 'Events', icon: albums, path: '/MesEvent' },
  ];

  const handleMenuClick = (path) => {
    setCurrentScreen(path); // Atualiza o estado do menu
    navigate(path); // Navega para a nova rota
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg  rounded-t-xl">
      <ul className="flex justify-around p-3">
        {Menus.map((menu) => (
          <li key={menu.path} className="flex-1">
            <a
              className={`flex flex-col items-center transition-all duration-300 ${
                currentScreen === menu.path ? 'text-rose-600 transform scale-150' : 'text-gray-500'
              }`}
              onClick={() => handleMenuClick(menu.path)}
            >
              <span className="text-2xl">
                <p><img src={menu.icon} className='w-5' alt="" /></p>
              </span>
              <span
                className={`text-sm transition-transform duration-300 ${
                  currentScreen === menu.path ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-1'
                }`}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
