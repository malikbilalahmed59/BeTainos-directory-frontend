import { useAds } from "@/app/hooks/useAPIs"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from "next/image";
import { s3BucketStrapiUrl } from "@/app/helper/helper";
const AdvertisementBox2 = () => {
  const { data } = useAds();
  const pageData = data && data[0]
  return (
    <div className='betainos-banner w-100 float-start my-5'>

      <Swiper
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 30 },
          640: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 1.3, spaceBetween: 30 },
          1024: { slidesPerView: 1.3, spaceBetween: 30 },
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
        {
          pageData?.DirectoryPageAds?.map(item => <SwiperSlide key={item.Banner?.id}>

            <figure key={item.Banner?.id} className='mb-0'><Image layout="fill"
              objectFit="cover" src={s3BucketStrapiUrl(item.Banner)} alt={item.Banner?.alternativeText || "BetainoBanner"} /></figure>
          </SwiperSlide>)
        }
      </Swiper>

    </div>
  )
}
export default AdvertisementBox2


