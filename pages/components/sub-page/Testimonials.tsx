import React from 'react'
import { IDirectoryPage } from '@/app/types/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import "swiper/css/autoplay";


interface Props {
  pageData: IDirectoryPage | undefined
}
export const Testimonials = ({ pageData }: Props) => {
  return (
    <div className='testimonials-con w-100 float-start'>
      <div className='container'>
      <Swiper pagination={true} modules={[Pagination]} loop={true} className="mySwiper">
        <SwiperSlide>
        {
          (pageData?.Testimonials || []).map(item => <div key={item.id} className='text-center testimonials-title'>
            <span className='d-block'>{item.Label}</span>
            <p>{item.Description}</p>
          </div>)
        }
        </SwiperSlide>
        <SwiperSlide>
        {
          (pageData?.Testimonials || []).map(item => <div key={item.id} className='text-center testimonials-title'>
            <span className='d-block'>{item.Label}</span>
            <p>{item.Description}</p>
          </div>)
        }
        </SwiperSlide>
      </Swiper>
        

      </div>
    </div>
  )
}
export default Testimonials;
