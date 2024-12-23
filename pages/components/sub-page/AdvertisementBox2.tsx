import { useAds } from "@/app/hooks/useAPIs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { s3BucketStrapiUrl } from "@/app/helper/helper";
import { useRef, useEffect } from "react";

const AdvertisementBox2 = () => {
  const { data } = useAds();
  const pageData = data?.[0];
  const swiperRef = useRef(null); // Ref for Swiper instance

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.autoplay.start(); // Ensure autoplay starts after component mount
    }
  }, [swiperRef]);

  if (!pageData) return null; // Ensure data is available before rendering

  return (
    <div className="betainos-banner w-100 float-start my-5">
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 30 },
          640: { slidesPerView: 1, spaceBetween: 30 },
          768: { slidesPerView: 1.3, spaceBetween: 30 },
          1024: { slidesPerView: 1.3, spaceBetween: 30 },
        }}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Assign Swiper instance to ref
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {pageData.DirectoryPageAds.map((item) => (
          <SwiperSlide key={item.Banner?.id}>
            <figure className="mb-0">
              <Image
                layout="fill"
                objectFit="cover"
                src={s3BucketStrapiUrl(item.Banner)}
                alt={item.Banner?.alternativeText || "BetainoBanner"}
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AdvertisementBox2;
