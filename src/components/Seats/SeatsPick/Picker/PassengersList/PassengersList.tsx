import React, { PropsWithChildren } from 'react'
import { useTypedSelector } from '../../../../../hooks/useTypedSelector'
import PassengerItem from '../PassengerItem/PassengerItem'
import s from './PassengersList.module.scss'

interface PassengersListProps {
   routeId: string
}

const PassengersList: React.FC<PropsWithChildren<PassengersListProps>> = ({ routeId }) => {
   const passengers = useTypedSelector(state => state.user.routes[routeId])

   return (
      <div className={s.list}>
         {passengers && !!passengers.length
            && passengers.map((ps) => <PassengerItem key={ps.id} {...ps} />)}
      </div>
   )
}

export default PassengersList;