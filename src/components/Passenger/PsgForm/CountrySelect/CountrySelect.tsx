import { TextField, Autocomplete } from '@mui/material';
import React, { PropsWithChildren } from 'react'
import s from './CountrySelect.module.scss'
import countries from 'i18n-iso-countries'
import ru from 'i18n-iso-countries/langs/ru.json'

countries.registerLocale(ru)

interface CountrySelectProps {
   onChange: any
   value: string
   [prop: string]: any,
}

const CountrySelect: React.FC<PropsWithChildren<CountrySelectProps>> = ({ onChange, ...props }) => {

   const handleSelect = (e: React.ChangeEvent<any>, v: any) => {
      onChange(v)
   }

   return (
      <div className={s.input_cont}>
         <Autocomplete
            id="virtualize-demo"
            options={Object.values(countries.getNames('ru'))}
            sx={{ fontSize: '1.6rem' }}
            onChange={handleSelect}
            value={props.value || null}
            renderInput={(params) => ((
               <TextField
                  {...params}
                  name='nationality'
                  required
                  label="Гражданство"
                  {...props}
               />
            ))}

         />
      </div>
   )
}

export default CountrySelect;