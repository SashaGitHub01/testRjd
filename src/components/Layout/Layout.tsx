import React, { PropsWithChildren } from 'react'
import s from './Layout.module.scss'
import Header from './Header/Header'

interface LayoutProps { }

const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
   return (
      <div className={s.layout}>
         <Header />
         <main className={s.main}>
            <div className={s.content}>
               {children}
            </div>
         </main>
      </div>
   )
}

export default Layout;