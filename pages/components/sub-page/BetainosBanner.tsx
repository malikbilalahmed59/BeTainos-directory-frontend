import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { IDirectoryPage } from '@/app/types/types';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
interface Props {
  pageData: IDirectoryPage | undefined
}

const BetainosBanner = ({ pageData }: Props) => {
  return (
    <div className='betainos-banner w-100 float-start'>
      
      <Swiper
      loop={true}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 30 },
        640: { slidesPerView: 1, spaceBetween: 30 },
        768: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
      }}
        spaceBetween={30}
        centeredSlides={true}
        freeMode={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        {
        pageData?.Services.Banner3?.map(item => <figure key={item.id} className='mb-0'><Image layout="fill"
          objectFit="cover" src={s3BucketStrapiUrl(item)} alt={item.alternativeText || "BetainoBanner"} /></figure>)
      }
        </SwiperSlide>
        <SwiperSlide>
        {
        pageData?.Services.Banner3?.map(item => <figure key={item.id} className='mb-0'><Image layout="fill"
          objectFit="cover" src={s3BucketStrapiUrl(item)} alt={item.alternativeText || "BetainoBanner"} /></figure>)
      }
        </SwiperSlide>
        <SwiperSlide>
        {
        pageData?.Services.Banner3?.map(item => <figure key={item.id} className='mb-0'><Image layout="fill"
          objectFit="cover" src={s3BucketStrapiUrl(item)} alt={item.alternativeText || "BetainoBanner"} /></figure>)
      }
        </SwiperSlide>
        <SwiperSlide>
        {
        pageData?.Services.Banner3?.map(item => <figure key={item.id} className='mb-0'><Image layout="fill"
          objectFit="cover" src={s3BucketStrapiUrl(item)} alt={item.alternativeText || "BetainoBanner"} /></figure>)
      }
        </SwiperSlide>
        <SwiperSlide>
        {
        pageData?.Services.Banner3?.map(item => <figure key={item.id} className='mb-0'><Image layout="fill"
          objectFit="cover" src={s3BucketStrapiUrl(item)} alt={item.alternativeText || "BetainoBanner"} /></figure>)
      }
        </SwiperSlide>
        <SwiperSlide>{
        pageData?.Services.Banner3?.map(item => <figure key={item.id} className='mb-0'><Image layout="fill"
          objectFit="cover" src={s3BucketStrapiUrl(item)} alt={item.alternativeText || "BetainoBanner"} /></figure>)
      }</SwiperSlide>
      </Swiper>
      
    </div>
  )
}
export default BetainosBanner;
