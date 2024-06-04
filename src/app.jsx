import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  HashRouter,
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import './app.scss';

import Fire from './pages/fire.jsx';
import Water from './pages/water.jsx';
import Earth from './pages/earth.jsx';
import Air from './pages/air.jsx';

const Navigation = () => (
  <>
    <nav>
      <NavLink to={'fire'}>Fire</NavLink>
      <NavLink to={'water'}>Water</NavLink>
      <NavLink to={'earth'}>Earth</NavLink>
      <NavLink to={'air'}>Air</NavLink>
    </nav>
    <Outlet/>
  </>
);

ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<Navigation/>}>
          <Route path='fire' element={<Fire/>}/>
          <Route path='water' element={<Water/>}/>
          <Route path='earth' element={<Earth/>}/>
          <Route path='air' element={<Air/>}/>
          <Route path='/' element={<Navigate to='fire' replace={true}/>}/>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);
