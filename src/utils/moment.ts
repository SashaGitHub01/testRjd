import moment from "moment";
import 'moment/locale/ru'

export const momentUtils = {
   getHours(num: number) {
      return moment.unix(num).format('HH:mm')
   },

   getDuration(dur: number, start: number) {
      moment.updateLocale('ru', {
         relativeTime: {
            past: "%s",
            h: '1 ч.',
            hh: '%d ч.'
         }
      })
      return moment.unix(start).from(moment.unix(start + dur))
   },

   getBirthDay(d: string, m: string, y: string) {
      return `${d}.${m}.${y}`
   },

   getUnits() {
      moment.locale('ru')
      const months = moment.months()
      const now = new Date().getUTCFullYear();
      const years = Array(now - (now - 100)).fill('').map((v, idx) => now - idx);
      const days = Array(31).fill('').map((v, idx) => idx + 1);

      return { years, months, days }
   }
}