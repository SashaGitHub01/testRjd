import { useAppDispatch } from "./useAppDispatch"
import * as Yup from 'yup'
import { PassengerI, PassengerInput } from "../types/Passenger.types"
import { useFormik } from "formik"
import { createPsgrSaga, fetchCreatePsgrThunk } from "../store/actions/userA"
import { useNavigate, useParams } from "react-router"
import { useCallback } from 'react'

interface PsgFormArgs {
   passenger: PassengerI
}

export const usePassengerForm = ({ passenger }: PsgFormArgs) => {
   const dispatch = useAppDispatch()
   const nav = useNavigate()
   const { id, user } = useParams()

   const navOnSuccess = () => {
      nav(`/seats/${id}`)
   }

   const schema = Yup.object().shape({
      firstName: Yup.string().trim().max(50).required(),
      gender: Yup.string().required(),
      lastName: Yup.string().trim().max(50).required(),
      fatherName: Yup.string().trim().max(50).required(),
      nationality: Yup.string().required(),
      document: Yup.string().required(),
      documentId: Yup.string()
         .matches(/^[0-9]+$/, "Must be only digits")
         .min(10)
         .max(10)
         .required(),
      phoneNumber: Yup.string()
         .matches(/^[0-9]+$/, "Must be only digits")
         .min(11)
         .max(11),
      email: Yup.string().email(),
      birth: Yup.string().required()
   })

   const formik = useFormik({
      initialValues: {
         firstName: passenger.firstName || '',
         lastName: passenger?.lastName || '',
         fatherName: passenger?.fatherName || '',
         nationality: passenger?.nationality || '',
         document: passenger?.document || '',
         documentId: passenger?.documentId || '',
         gender: passenger?.gender || '',
         email: passenger?.email || '',
         phoneNumber: passenger?.phoneNumber || '',
         birth: passenger?.birth || ''
      },

      validationSchema: schema,

      validateOnChange: false,

      onSubmit: async (values) => {
         if (!id || !user) return;
         // dispatch(fetchCreatePsgrThunk(
         //    values as PassengerInput,
         //    +user,
         //    +id,
         //    navOnSuccess
         // ))
         dispatch(createPsgrSaga({
            data: values as PassengerInput,
            seatId: +user,
            routeId: +id,
            nav: navOnSuccess
         }))
      }
   })

   const onSelectCountry = useCallback((val: string) => {
      formik.setFieldValue('nationality', val)
   }, [])

   const setBirthDate = useCallback((date: string) => {
      formik.setFieldValue('birth', date)
   }, [])

   return { formik: { ...formik, onSelectCountry, setBirthDate } }
}