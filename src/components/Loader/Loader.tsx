import { CircularProgress } from '@mui/material';
import s from './Loader.module.scss'
import React, { PropsWithChildren } from 'react'

interface LoaderProps { }

const Loader: React.FC<PropsWithChildren<LoaderProps>> = ({ }) => {
   return (
      <div className={s.spinner_cont}>
         <CircularProgress />
      </div>
   )
}

export default Loader;