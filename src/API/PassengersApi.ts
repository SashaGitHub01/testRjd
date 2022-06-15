import axios from 'axios'
import { nanoid } from 'nanoid'
import { PassengerI, PassengerInput } from '../types/Passenger.types'

const URL = 'https://webhook.site/4bb1ee92-b0fa-4467-9c03-0e024f4cf3c0'

const instance = axios.create({
   url: URL,
   headers: {
      'Content-Type': 'application/json'
   }
})

export class PassengersApi {
   static createPassenger = async (body: PassengerInput): Promise<PassengerI> => {
      const data = await instance.post('/passengers', body)
      return {
         ...body,
         id: nanoid(7),
      }
   }
}