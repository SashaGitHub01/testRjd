import axios from 'axios'
import { RouteI } from '../types/Routes.interface'

interface RoutesRes {
   routes: RouteI[]
}

export class RoutesApi {
   static getRoutes = async (): Promise<RouteI[]> => {
      const { data } = await axios.get<RoutesRes>('/db.json')
      return data.routes;
   }

   static getRoute = async (id: string): Promise<RouteI | undefined> => {
      const { data } = await axios.get<RoutesRes>('/db.json')
      return data.routes.find((r) => r.id === id);
   }
}