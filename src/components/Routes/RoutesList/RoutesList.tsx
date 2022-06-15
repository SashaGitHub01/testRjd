import { CircularProgress } from '@mui/material'
import React, { PropsWithChildren, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { fetchRoutesThunk } from '../../../store/actions/routesA'
import RouteItem from '../RouteItem/RouteItem'
import s from './RoutesList.module.scss'

interface RoutesListProps { }

const RoutesList: React.FC<PropsWithChildren<RoutesListProps>> = ({ }) => {
   const { routes, isFetching } = useTypedSelector(state => state.routes)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchRoutesThunk())
   }, [])


   return (
      <div className={s.list}>
         {isFetching
            ? <CircularProgress />
            : routes && routes.map((r) => <RouteItem key={r.id} {...r} />)
         }
      </div>
   )
}

export default RoutesList;