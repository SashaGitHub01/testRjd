import React, { PropsWithChildren } from 'react'
import RoutesPage from '../../components/Routes/Routes';

interface RoutesProps { }

const Routes: React.FC<PropsWithChildren<RoutesProps>> = ({ }) => {
   return (
      <RoutesPage />
   )
}

export default Routes;