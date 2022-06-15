import React, { PropsWithChildren, useEffect, useState } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { addSeat, deleteSeat } from '../../../store/actions/userA';
import PassengersList from './Picker/PassengersList/PassengersList';
import Picker from './Picker/Picker';
import s from './SeatsPick.module.scss'

interface SeatsPickProps {
   seats: number[],
   free: number[],
   routeId: string,
   from: string,
   to: string
}


const SeatsPick: React.FC<PropsWithChildren<SeatsPickProps>> = ({ seats, free, routeId, from, to }) => {
   const myPassengers = useTypedSelector(state => state.user.routes[routeId])
   const [freeSeats, setFreeSeats] = useState(free)
   const [occupiedSeats, setOccupiedSeats] = useState<number[]>([])
   const dispatch = useAppDispatch()

   useEffect(() => {
      const occup = seats.filter((id) => {
         if (free.includes(id)) return true;
      })
      setOccupiedSeats(occup)
   }, [freeSeats])

   const handleOccupy = (id: number) => {
      dispatch(addSeat({ routeId: +routeId, seatId: id }))
      setFreeSeats(prev => prev.filter((val) => val !== id))
   }

   const handleDeoccupy = (id: number) => {
      dispatch(deleteSeat({ routeId: +routeId, seatId: id }))
      setFreeSeats(prev => {
         prev.push(id)
         return prev.sort((a, b) => {
            return a - b;
         })
      })
   }

   return (
      <div className={s.pick_cont}>
         <Picker
            seats={seats}
            myPassengers={myPassengers}
            handleOccupy={handleOccupy}
            handleDeoccupy={handleDeoccupy}
            freeSeats={freeSeats}
            occupiedSeats={occupiedSeats}
         />
         <div className={s.path}>
            <h5>
               {from} - {to}
            </h5>
         </div>
         <PassengersList routeId={routeId} />
      </div>
   )
}

export default SeatsPick;