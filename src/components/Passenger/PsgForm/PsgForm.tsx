import React, { PropsWithChildren } from 'react'
import s from './PsgForm.module.scss'
import { PassengerI } from '../../../types/Passenger.types'
import {
   Button, FormControl, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField
} from '@mui/material'
import CountrySelect from './CountrySelect/CountrySelect'
import { usePassengerForm } from '../../../hooks/usePassengerForm'
import InputContainer from '../../InputContainer/InputContainer'
import BitrthSelect from './BitrthSelect/BitrthSelect'

interface PsgFormProps {
   passenger: PassengerI
}

const PsgForm: React.FC<PropsWithChildren<PsgFormProps>> = ({ passenger }) => {
   const { formik } = usePassengerForm({ passenger })

   return (
      <form className={s.form} onSubmit={formik.handleSubmit}>
         <div className={s.form_content}>
            <div className={s.row}>
               <InputContainer>
                  <TextField
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     required
                     label='Фамилия'
                     name={'lastName'}
                     className={s.input}
                     error={!!formik.errors.lastName}
                     value={formik.values.lastName}
                  />
               </InputContainer>
               <InputContainer>
                  <TextField
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     className={s.input}
                     required
                     label='Имя'
                     name='firstName'
                     error={!!formik.errors.firstName}
                     value={formik.values.firstName}
                  />
               </InputContainer>
               <InputContainer>
                  <TextField
                     onChange={formik.handleChange}
                     className={s.input}
                     onBlur={formik.handleBlur}
                     required
                     label='Отчество'
                     name='fatherName'
                     error={!!formik.errors.fatherName}
                     value={formik.values.fatherName}
                  />
               </InputContainer>
            </div>
            <div className={s.row}>
               <InputContainer>
                  <FormControl fullWidth >
                     <InputLabel id="mui-gender-label" required error={!!formik.errors.gender}>
                        Пол
                     </InputLabel>
                     <Select
                        className={s.input}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        labelId="mui-gender-label"
                        label='Пол'
                        name='gender'
                        value={formik.values.gender}
                        error={!!formik.errors.gender}
                     >
                        <MenuItem value={'Женщина'}>Женщина</MenuItem>
                        <MenuItem value={'Мужчина'}>Мужчина</MenuItem>
                     </Select>
                  </FormControl>
               </InputContainer>
               <CountrySelect
                  value={formik.values.nationality}
                  name='nationality'
                  onChange={formik.onSelectCountry}
                  onBlur={formik.handleBlur}
                  error={!!formik.errors.nationality}
               />
               <BitrthSelect
                  setDate={formik.setBirthDate}
                  error={!!formik.errors.birth}
                  value={formik.values.birth}
                  onBlur={formik.handleBlur}
               />
            </div>
            <div className={s.row}>
               <InputContainer>
                  <FormControl fullWidth>
                     <InputLabel id="mui-doc-label" required error={!!formik.errors.document}>
                        Документ
                     </InputLabel>
                     <Select
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={s.input}
                        labelId="mui-doc-label"
                        label='Документ'
                        name='document'
                        value={formik.values.document}
                        error={!!formik.errors.document}
                     >
                        <MenuItem value={'Паспорт'}>Паспорт</MenuItem>
                     </Select>
                  </FormControl>
               </InputContainer>
               <InputContainer>
                  <TextField
                     onChange={formik.handleChange}
                     className={s.input}
                     onBlur={formik.handleBlur}
                     required
                     label='Номер документа'
                     name='documentId'
                     inputProps={{ maxLength: 10 }}
                     error={!!formik.errors.documentId}
                     value={formik.values.documentId}
                  />
               </InputContainer>
               <InputContainer>
                  <TextField
                     onChange={formik.handleChange}
                     className={s.input}
                     onBlur={formik.handleBlur}
                     label='Тариф'
                     name='тариф'
                     disabled
                     variant='filled'
                     inputProps={{ maxLength: 10 }}
                  />
               </InputContainer>
            </div>
            <div className={s.text}>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt neque a unde, quia nam dolorum rem facilis quisquam laudantium quo at iusto tenetur illum repellendus vel aliquid similique reiciendis consequuntur:
               </p>
            </div>
            <div className={s.row}>
               <InputContainer>
                  <FormControl fullWidth>
                     <InputLabel htmlFor="mui-phone-label">
                        Номер телефона
                     </InputLabel>
                     <OutlinedInput
                        onChange={formik.handleChange}
                        className={s.input}
                        onBlur={formik.handleBlur}
                        id='mui-phone-label'
                        name='phoneNumber'
                        inputProps={{ maxLength: 11 }}
                        label="Номер телефона"
                        startAdornment={<InputAdornment position="start" className={s.plus} >
                           +
                        </InputAdornment>}
                        error={!!formik.errors.phoneNumber}
                        value={formik.values.phoneNumber}
                     />
                  </FormControl>
               </InputContainer>
               <InputContainer>
                  <TextField
                     onChange={formik.handleChange}
                     className={s.input}
                     onBlur={formik.handleBlur}
                     label='Email'
                     name='email'
                     error={!!formik.errors.email}
                     value={formik.values.email}
                  />
               </InputContainer>
            </div>
         </div>
         <div className={s.form_submit}>
            <Button
               variant='contained'
               type='submit'
               disabled={!formik.isValid || !formik.dirty || formik.isSubmitting}
            >
               Сохранить
            </Button>
         </div>
      </form>
   )
}

export default PsgForm;