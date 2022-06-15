import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png'
import s from './Header.module.scss'
import TicketsCount from './TicketsCount/TicketsCount';

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
                  <Link to={'/routes'} className={s.nav_link}>
                     <span>Купить билет</span>
                  </Link>
               </li>
               <TicketsCount />
            </ul>
         </nav>
      </header>
   )
}

export default Header;