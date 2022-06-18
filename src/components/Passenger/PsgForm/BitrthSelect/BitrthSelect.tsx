import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { PropsWithChildren, useEffect, useState } from 'react'
import { momentUtils } from '../../../../utils/moment';
import InputContainer from '../../../InputContainer/InputContainer';
import s from './BitrthSelect.module.scss'

const dateUnits = momentUtils.getUnits()

interface BitrthSelectProps {
   setDate: (d: string) => void,
   error: boolean,
   value: string,
   onBlur: any
}

const BitrthSelect: React.FC<PropsWithChildren<BitrthSelectProps>> = ({ setDate, onBlur, value, error, ...props }) => {
   const [day, setDay] = useState('')
   const [month, setMonth] = useState('')
   const [year, setYear] = useState('')

   const changeDay = (e: SelectChangeEvent) => {
      setDay(e.target.value)
   }

   const changeMonth = (e: SelectChangeEvent) => {
      setMonth(e.target.value)
   }

   const changeYear = (e: SelectChangeEvent) => {
      setYear(e.target.value)
   }

   useEffect(() => {
      if (day && month && year) {
         const date = momentUtils.getBirthDay(day, month, year)
         setDate(date)
      }
   }, [day, month, year])

   useEffect(() => {
      if (!!value) {
         const dateArr = value.split('.')
         setDay(dateArr[0])
         setMonth(dateArr[1])
         setYear(dateArr[2])
      }
   }, [value])

   return (
      <InputContainer style={{ display: 'flex', gap: '1rem' }}>
         <FormControl >
            <InputLabel id="mui-day-label" required error={error}>
               Число рожд.
            </InputLabel>
            <Select
               className={s.input}
               labelId="mui-day-label"
               label='Число рожд.'
               value={day}
               onChange={changeDay}
               error={error}
               onBlur={onBlur}
            >
               {dateUnits.days.map((d, i) => <MenuItem key={d + i} value={d}>{d}</MenuItem>)}
            </Select>
         </FormControl>
         <FormControl >
            <InputLabel id="mui-month-label" required error={error}>
               Месяц рожд.
            </InputLabel>
            <Select
               className={s.input}
               labelId="mui-month-label"
               label='Месяц рожд.'
               value={month}
               onChange={changeMonth}
               error={error}
               onBlur={onBlur}
            >
               {dateUnits.months.map((m, i) => <MenuItem key={m + i} value={i + 1}>{m}</MenuItem>)}
            </Select>
         </FormControl>
         <FormControl >
            <InputLabel id="mui-year-label" required error={error}>
               Год рожд.
            </InputLabel>
            <Select
               className={s.input}
               labelId="mui-year-label"
               label='Год рожд.'
               value={year}
               onChange={changeYear}
               error={error}
               onBlur={onBlur}
            >
               {dateUnits.years.map((y, i) => <MenuItem key={i} value={y}>{y}</MenuItem>)}
            </Select>
         </FormControl>
      </InputContainer>
   )
}

export default BitrthSelect;