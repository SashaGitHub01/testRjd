import React, { PropsWithChildren, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { Button, IconButton } from '@mui/material';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PassengerI } from '../../types/Passenger.types';
import CloseIcon from '@mui/icons-material/Close';
import s from './Passenger.module.scss'
import PsgForm from './PsgForm/PsgForm';

interface PassengerPageProps { }

const PassengerPage: React.FC<PropsWithChildren<PassengerPageProps>> = ({ }) => {
   const { id, user } = useParams()
   const passenger = useTypedSelector(state => state.user.routes[id as string]?.find((p) => p.id == user))

   return (
      <div className={s.page}>
         <div className={s.head}>
            <p>
               Ввод данных пассажира
            </p>
         </div>
         {passenger ? <div className={s.content}>
            <div className={s.content_head}>
               <p className={s.psg_num}>
                  Пассажир № {passenger?.seat}
               </p>
               <Button
                  startIcon={<CloseIcon className={s.del_icon} />}
                  className={s.del_btn}
               >
                  <span>Удалить</span>
               </Button>
            </div>
            <PsgForm passenger={passenger} />
         </div>
            : null}
      </div>
   )
}

export default PassengerPage;