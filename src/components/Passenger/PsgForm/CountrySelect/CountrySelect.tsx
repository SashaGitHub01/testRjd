import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React, { PropsWithChildren } from 'react'
import s from './CountrySelect.module.scss'
import countries from 'i18n-iso-countries'
import ru from 'i18n-iso-countries/langs/ru.json'

countries.registerLocale(ru)

interface CountrySelectProps {
   onChange: any
   [prop: string]: any
}

const CountrySelect: React.FC<PropsWithChildren<CountrySelectProps>> = ({ onChange, ...props }) => {
   return (
      <FormControl fullWidth>
         <InputLabel id="mui-nation-label" required>
            Гражданство
         </InputLabel>
         <Select
            labelId="mui-nation-label"
            className={s.select}
            required
            label='Гражданство'
            {...props}
            onChange={onChange}
         >
            {Object.values(countries.getNames('ru')).map(n => {
               return <MenuItem value={n}>
                  {n}
               </MenuItem>
            })}
         </Select>
      </FormControl>
   )
}

export default CountrySelect;