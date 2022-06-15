import React, { PropsWithChildren } from 'react'
import { RouteI } from '../../../types/Routes.interface';
import s from './RouteItem.module.scss'
import { ArrowForwardIosOutlined as ArrowIcon } from '@mui/icons-material'
import { momentUtils } from '../../../utils/moment';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

interface RouteItemProps extends RouteI { }

const RouteItem: React.FC<PropsWithChildren<RouteItemProps>> = ({ free, from, seats, start, to, duration, id, price }) => {


   return (
      <Link to={`/seats/${id}`} className={s.item}>
         <div className={s.left_row}>
            <div className={s.time_row}>
               <div className={s.time}>
                  <p>
                     {momentUtils.getHours(start)}
                  </p>
               </div>
               <div className={s.arrow_cont}>
                  <div className={s.arrow_line}>
                     <div className={s.circle} />
                     <div className={s.duration}>
                        <p>
                           {momentUtils.getDuration(duration, start)}  в пути
                        </p>
                     </div>
                     <ArrowIcon className={s.icon} />
                  </div>
               </div>
               <div className={s.time}>
                  <p>
                     {momentUtils.getHours(start + duration)}
                  </p>
               </div>
            </div>
            <div className={s.formto}>
               <div className={s.city}>
                  <h6>{from}</h6>
               </div>
               <div className={s.city}>
                  <h6>{to}</h6>
               </div>
            </div>
         </div>
         <div className={s.right_row}>
            <div className={s.price}>
               Цена:
               <p className={s.price_value}>
                  {price} руб.
               </p>
            </div>
         </div>
      </Link>
   )
}

export default RouteItem;