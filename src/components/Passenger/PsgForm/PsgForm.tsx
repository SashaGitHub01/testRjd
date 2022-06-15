import React, { PropsWithChildren } from 'react'
import s from './PsgForm.module.scss'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { PassengerI } from '../../../types/Passenger.types'
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import CountrySelect from './CountrySelect/CountrySelect'

interface PsgFormProps {
   passenger: PassengerI
}

const PsgForm: React.FC<PropsWithChildren<PsgFormProps>> = ({ passenger }) => {

   const schema = Yup.object().shape({
      firstName: Yup.string().trim().max(50).required(),
      lastName: Yup.string().trim().max(50).required(),
      fatherName: Yup.string().trim().max(50).required(),
      nationality: Yup.string().required(),
      birth: Yup.date().max(new Date()).required(),
      document: Yup.string().required(),
      documentId: Yup.string().required(),
   })

   const formik = useFormik<Omit<PassengerI, 'id' | 'seat'>>({
      initialValues: {
         firstName: passenger.firstName || '',
         lastName: passenger?.lastName || '',
         fatherName: passenger?.fatherName || '',
         nationality: passenger?.nationality || '',
         document: passenger?.document || '',
         documentId: passenger?.documentId || '',
         gender: passenger?.gender,
         email: passenger?.email || '',
         phoneNumber: passenger?.phoneNumber,
      },

      validationSchema: schema,

      onSubmit: (values) => {
         console.log(values)
      }
   })

   const customDateInput = (e: React.ChangeEvent<any>) => {
      console.log(typeof e.target.value);
      if (typeof +e.target.value !== 'number') return;
      formik.handleChange(e)
   }

   return (
      <form className={s.form} onSubmit={formik.handleSubmit}>
         <div className={s.form_content}>
            <div className={s.row}>
               <TextField
                  onChange={formik.handleChange}
                  className={s.input}
                  required
                  label='Фамилия'
               />
               <TextField
                  onChange={formik.handleChange}
                  className={s.input}
                  required
                  label='Имя'
               />
               <TextField
                  onChange={formik.handleChange}
                  className={s.input}
                  required
                  label='Отчество'
               />
            </div>
            <div className={s.row}>
               <FormControl fullWidth>
                  <InputLabel id="mui-gender-label" required>
                     Пол
                  </InputLabel>
                  <Select
                     onChange={formik.handleChange}
                     className={s.input}
                     labelId="mui-gender-label"
                     label='Пол'
                     name='gender'
                  >
                     <MenuItem value={10}>Женщина</MenuItem>
                     <MenuItem value={20}>Мужчина</MenuItem>
                  </Select>
               </FormControl>
               <TextField
                  onChange={customDateInput}
                  className={s.input}
                  required
                  label='Дата рождения'
                  name='birth'
               />
               <CountrySelect
                  onChange={formik.handleChange}
               />
            </div>
         </div>
      </form>
   )
}

export default PsgForm;