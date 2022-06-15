import moment from "moment";

export const momentUtils = {
   getHours(num: number) {
      return moment.unix(num).format('HH:mm')
   },

   getDuration(dur: number, start: number) {
      moment.updateLocale('rus', {
         relativeTime: {
            past: "%s",
            h: '1 ч.',
            hh: '%d ч.'
         }
      })
      return moment.unix(start).from(moment.unix(start + dur))
   },

   getBirthDay(date: string) {
      return moment(date).format('dd.MM.yyyy')
   }
}