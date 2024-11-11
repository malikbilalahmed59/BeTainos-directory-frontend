import React from 'react'
import { IDirectoryPage } from '@/app/types/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


interface Props {
  pageData: IDirectoryPage | undefined
}
export const Testimonials = ({ pageData }: Props) => {
  return (
    <div className='testimonials-con w-100 float-start'>
      <div className='container'>
        <Swiper
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}

          className="mySwiper"
        >

          {
            (pageData?.Testimonials || []).map(item =>
              <SwiperSlide key={item.id}>
                <div className='text-center testimonials-title'>
                  <span className='d-block'>{item.Label}</span>
                  <p>{item.Description}</p>
                </div>
              </SwiperSlide>
            )
          }

        </Swiper>


      </div>
    </div>
  )
}
export default Testimonials;
