import React, { PropsWithChildren } from 'react'
import s from './Routes.module.scss'
import RoutesList from './RoutesList/RoutesList';

interface RoutesProps { }

const RoutesPage: React.FC<PropsWithChildren<RoutesProps>> = ({ }) => {
   return (
      <div className={s.routes}>
         <div className={s.title}>
            <h2 className={s.head}>
               Маршруты
            </h2>
         </div>
         <div className={s.content}>
            <RoutesList />
         </div>
      </div>
   )
}

export default RoutesPage;