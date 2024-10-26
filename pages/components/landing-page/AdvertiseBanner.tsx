import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { ILandingPage } from '@/app/types/landingpage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

interface Props {
  pageData: ILandingPage | undefined
}
const AdvertiseBanner = ({ pageData }: Props) => {
  return (
    <>
      {
        pageData?.Advertisement && pageData.Advertisement.Banner && <div className='advertise-banner w-100 float-start'>
          <div className='container'>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 3000, // Slide transition delay (in ms)
                disableOnInteraction: false, // Enable/Disable autoplay on user interaction
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
            >
              {
                pageData.Advertisement.Banner.map((slide => <SwiperSlide key={slide.id}>
                  <figure className='mb-0'>
                    <Image
                      priority
                      width={1000}
                      height={304}
                      src={s3BucketStrapiUrl(slide)}
                      alt={slide.alternativeText || ""}
                    />
                  </figure>
                </SwiperSlide>))
              }
            </Swiper>
            {/* container */}
          </div>
        </div>
      }

    </>

  );
};

export default AdvertiseBanner;