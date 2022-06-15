import React, { PropsWithChildren } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import s from './PassengerItem.module.scss'
import { PassengerI } from '../../../../../types/Passenger.types';
import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

interface PassengerItemProps extends PassengerI { }

const PassengerItem: React.FC<PropsWithChildren<PassengerItemProps>> = ({ firstName, lastName, fatherName, id, seat, }) => {
   const loc = useLocation()

   return (
      <div className={s.psg}>
         <div className={s.psg_left}>
            <div className={s.psg_info}>
               <div className={s.person}>
                  <PersonIcon className={s.icon} />
               </div>
               <div className={s.psg_data}>
                  <p className={s.psg_num}>
                     Пассажир № {id}
                  </p>
                  <div className={s.psg_name}>
                     {firstName ? `${firstName} ${lastName} ${fatherName}` : "Введите данные пассажира"}
                  </div>
               </div>
            </div>
         </div>
         <div className={s.psg_right}>
            <Button
               component={Link}
               to={`${loc.pathname}/${id}`}
               variant='contained'
            >
               Ввести данные
            </Button>
         </div>
      </div>
   )
}

export default PassengerItem;