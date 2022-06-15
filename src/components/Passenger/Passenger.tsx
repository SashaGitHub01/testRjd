import React, { PropsWithChildren, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import { Button, IconButton } from '@mui/material';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { PassengerI } from '../../types/Passenger.types';
import CloseIcon from '@mui/icons-material/Close';
import s from './Passenger.module.scss'
import PsgForm from './PsgForm/PsgForm';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { deleteSeat } from '../../store/actions/userA';

interface PassengerPageProps { }

const PassengerPage: React.FC<PropsWithChildren<PassengerPageProps>> = ({ }) => {
   const { id, user } = useParams()
   const nav = useNavigate()
   const passenger = useTypedSelector(state => state.user.routes[id as string]?.find((p) => p.id == user))
   const dispatch = useAppDispatch()

   const handleDelete = () => {
      if (!id || !user) return;
      dispatch(deleteSeat({ routeId: +id, seatId: +user }))
      nav(`/seats/${id}`)
   }

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
                  onClick={handleDelete}
                  startIcon={<CloseIcon className={s.del_icon} />}
                  className={s.del_btn}
               >
                  <span>Удалить</span>
               </Button>
            </div>
            <PsgForm
               passenger={passenger}
            />
         </div>
            : null}
      </div>
   )
}

export default PassengerPage;