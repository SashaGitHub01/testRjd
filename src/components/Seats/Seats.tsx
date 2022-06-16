import React, { PropsWithChildren, useEffect } from 'react'
import { useParams } from 'react-router'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchRouteThunk } from '../../store/actions/currentRouteA'
import { selectCurrentRoute } from '../../store/selecotors/currentRoute'
import Loader from '../Loader/Loader'
import s from './Seats.module.scss'
import SeatsPick from './SeatsPick/SeatsPick'

interface SeatsPageProps { }

const SeatsPage: React.FC<PropsWithChildren<SeatsPageProps>> = ({ }) => {
   const { id } = useParams()
   const dispatch = useAppDispatch()
   const { route, isFetching } = useTypedSelector(selectCurrentRoute)

   useEffect(() => {
      if (id) {
         dispatch(fetchRouteThunk(id))
      }
   }, [id])

   return (
      <div className={s.page}>
         <div className={s.header}>
            <p>
               Выберите места для пассажиров
            </p>
         </div>
         {isFetching
            ? <Loader />
            : route && <div className={s.seats_content}>
               <SeatsPick
                  from={route.from}
                  to={route.to}
                  routeId={id as string}
                  seats={route.seats}
                  free={route.free}
               />
            </div>}
      </div>
   )
}

export default SeatsPage;