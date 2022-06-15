import { Button } from '@mui/material';
import React, { PropsWithChildren } from 'react'
import s from './Home.module.scss'
import Slider from './Slider/Slider';
import { Link } from 'react-router-dom'

interface HomeProps { }

const Home: React.FC<PropsWithChildren<HomeProps>> = ({ }) => {
   return (
      <div className={s.home}>
         <Slider />
         <div className={s.content}>
            <div className={s.welcome}>
               <b className={s.welcome_text}>
                  Добро пожаловать!
               </b>
               <div className={s.btn_cont}>
                  <Button variant='contained' component={Link} to='/routes' >
                     <p className={s.link}>
                        Заказать билет
                     </p>
                  </Button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home;