export type Gender = 'Мужчина' | 'Женщина'

export interface PassengerI {
   id: string,
   firstName?: string,
   seat?: number,
   lastName?: string,
   fatherName?: string,
   nationality?: string,
   gender?: Gender,
   document?: string,
   documentId?: string,
   birth?: string,
   email?: string,
   phoneNumber?: string
}

export type PassengerInput = Omit<PassengerI, 'id' | 'seat'>
