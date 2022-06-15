import React, { PropsWithChildren } from 'react'
import PassengerPage from '../../components/Passenger/Passenger';

interface PassengerProps { }

const Passenger: React.FC<PropsWithChildren<PassengerProps>> = ({ }) => {
   return (
      <PassengerPage />
   )
}

export default Passenger;