import React from 'react';
import Image from 'next/image';
import advertiseBanner from '/public/images/advertise-banner.jpg'; // Correct import for the image
import { ILandingPage } from '@/app/types/landingpage';

interface Props {
  pageData: ILandingPage | undefined
}
const AdvertiseBanner = ({ pageData }: Props) => {
  return (
    <>
      {
        pageData?.Advertisement && pageData.Advertisement.Banner && <div className='advertise-banner w-100 float-start'>
          <div className='container'>
            <figure className='mb-0'>
              <Image width={100} height={40} src={pageData.Advertisement.Banner.url || ""} alt={pageData.Advertisement.Banner.alternativeText || ""} />
            </figure>
            {/* container */}
          </div>
        </div>
      }

    </>

  );
};

export default AdvertiseBanner;