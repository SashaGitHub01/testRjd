import React, { PropsWithChildren } from 'react'
import { PassengerI } from '../../../../../types/Passenger.types'
import PassengerItem from '../PassengerItem/PassengerItem'
import s from './PassengersList.module.scss'

interface PassengersListProps {
   routeId: string,
   passengers: PassengerI[]
}

const PassengersList: React.FC<PropsWithChildren<PassengersListProps>> = ({ routeId, passengers }) => {

   return (
      <div className={s.list}>
         {passengers && !!passengers.length
            && passengers.map((ps) => <PassengerItem key={ps.id} {...ps} />)}
      </div>
   )
}

export default PassengersList;