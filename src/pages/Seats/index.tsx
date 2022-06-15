import React, { PropsWithChildren } from 'react'
import SeatsPage from '../../components/Seats/Seats';

interface SeatsProps { }

const Seats: React.FC<PropsWithChildren<SeatsProps>> = ({ }) => {
   return (
      <SeatsPage />
   )
}

export default Seats;