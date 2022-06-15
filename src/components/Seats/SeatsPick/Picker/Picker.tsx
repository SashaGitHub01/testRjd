import { Button } from '@mui/material'
import React, { PropsWithChildren } from 'react'
import cn from 'classnames'
import s from './Picker.module.scss'
import { PassengerI } from '../../../../types/Passenger.types'

interface PickerProps {
   handleOccupy: (id: number) => void
   handleDeoccupy: (id: number) => void
   freeSeats: number[]
   myPassengers: PassengerI[],
   occupiedSeats: number[]
   seats: number[]
}

const Picker: React.FC<PropsWithChildren<PickerProps>> = ({
   handleDeoccupy, handleOccupy, myPassengers, seats, freeSeats, occupiedSeats
}) => {

   const checkIsYour = (num: number) => {
      let isHas = false;

      myPassengers.forEach((ps) => {
         if (ps.seat === num) isHas = true
      })

      return isHas;
   }

   return (
      <div className={s.picker_area}>
         <div className={s.pick_row}>
            {seats.map((seat, i) => {
               if (myPassengers && checkIsYour(i)) {
                  return <Button
                     onClick={() => handleDeoccupy(i)}
                     key={i}
                     variant={'contained'}
                     color={'success'}
                     disabled={occupiedSeats.includes(i)}
                  >
                     {i}
                  </Button>
               } else {
                  return <Button
                     onClick={() => handleOccupy(i)}
                     key={i}
                     variant={'contained'}
                     color={'primary'}
                     disabled={occupiedSeats.includes(i)}
                  >
                     {i}
                  </Button>
               }
            })}
         </div>
      </div>
   )
}

export default Picker;