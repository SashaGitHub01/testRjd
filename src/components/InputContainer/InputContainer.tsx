import React, { PropsWithChildren } from 'react'
import s from './InputContainer.module.scss'

interface InputContainerProps {
   [k: string]: any
}

const InputContainer: React.FC<PropsWithChildren<InputContainerProps>> = ({ children, ...props }) => {
   return (
      <div className={s.input_cont} {...props}>
         {children}
      </div>
   )
}

export default InputContainer;