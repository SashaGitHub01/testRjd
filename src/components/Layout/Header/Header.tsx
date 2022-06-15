import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import s from './Header.module.scss'
import { IoTicketSharp as TicketIcon } from 'react-icons/io5'

interface HeaderProps { }

const Header: React.FC<PropsWithChildren<HeaderProps>> = ({ }) => {

   return (
      <header className={s.header}>
         <div className={s.logo}>
            <Link to={'/'}>
               <img src={logo} alt="logo" />
            </Link>
         </div>
         <nav className={s.nav}>
            <ul className={s.nav_list}>
               <li className={s.nav_item}>
                  <Link to={'/newTicket'} className={s.nav_link}>
                     <span>Купить билет</span>
                  </Link>
               </li>
               <li className={`${s.nav_item} ${s.check}`}>
                  <Link to={'/tickets'} className={s.nav_link}>
                     <TicketIcon className={s.ticket_icon} />
                  </Link>
                  <div className={s.circle}>
                     <p className={s.total}>
                        11
                     </p>
                  </div>
               </li>
            </ul>
         </nav>
      </header>
   )
}

export default Header;