import React, { PropsWithChildren, useEffect } from 'react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { fetchRoutesThunk } from '../../../store/actions/routesA'
import { selectAllRoutes } from '../../../store/selecotors/routes'
import Loader from '../../Loader/Loader'
import RouteItem from '../RouteItem/RouteItem'
import s from './RoutesList.module.scss'

interface RoutesListProps { }

const RoutesList: React.FC<PropsWithChildren<RoutesListProps>> = ({ }) => {
   const { routes, isFetching } = useTypedSelector(selectAllRoutes)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchRoutesThunk())
   }, [])


   return (
      <div className={s.list}>
         {isFetching
            ? <Loader />
            : routes && routes.map((r) => <RouteItem key={r.id} {...r} />)
         }
      </div>
   )
}

export default RoutesList;