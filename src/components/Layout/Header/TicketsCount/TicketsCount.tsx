import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom';
import { IoTicketSharp as TicketIcon } from 'react-icons/io5'
import s from './TicketsCount.module.scss'
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { selectTicketsLength } from '../../../../store/selecotors/user';

interface TicketsCountProps { }

const TicketsCount: React.FC<PropsWithChildren<TicketsCountProps>> = ({ }) => {
   const count = useTypedSelector(selectTicketsLength)

   return (
      <li className={`${s.nav_item} ${s.check}`}>
         <div className={s.nav_link}>
            <TicketIcon className={s.ticket_icon} />
         </div>
         {count > 0
            && <div className={s.circle}>
               <p className={s.total}>
                  {count}
               </p>
            </div>}
      </li>
   )
}

export default TicketsCount;