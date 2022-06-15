import React, { PropsWithChildren } from 'react'
import { Swiper, SwiperSlide, } from 'swiper/react'
import { Autoplay, Swiper as SwiperCfg } from 'swiper'
import img1 from '../../../assets/train.jpg'
import img2 from '../../../assets/train2.jpg'
import s from './Slider.module.scss'

SwiperCfg.use([Autoplay]);

interface SliderProps { }

const Slider: React.FC<PropsWithChildren<SliderProps>> = ({ }) => {
   return (
      <div className={s.slider}>
         <div className={s.title}>
            <h1 className={s.head}>
               <p>Российские</p> железные дороги
            </h1>
         </div>
         <Swiper
            spaceBetween={0}
            autoplay={{
               delay: 2000,
            }}
            allowTouchMove={false}
            loop
         >
            <SwiperSlide>
               <div className={s.slide}>
                  <img src={img1} alt={'Travel Image'} />
               </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className={s.slide}>
                  <img src={img2} alt={'Travel Image'} />
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   )
}

export default Slider;