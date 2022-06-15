import React, { PropsWithChildren } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home';
import RoutesPage from '../../pages/Routes/index';
import Seats from '../../pages/Seats';
import PassengerPage from '../Passenger/Passenger';

interface AppRouterProps { }

const AppRouter: React.FC<PropsWithChildren<AppRouterProps>> = ({ }) => {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/routes' element={<RoutesPage />} />
         <Route path='/newTicket' element={<div>tic</div>} />
         <Route path='/seats/:id' element={<Seats />} />
         <Route path='/seats/:id/:user' element={<PassengerPage />} />
      </Routes>
   )
}

export default AppRouter;