import React from 'react';
import Image from 'next/image';
import advertiseBanner from '/public/images/advertise-banner.jpg'; // Correct import for the image

const AdvertiseBanner = () => {
  return (
    <div className='advertise-banner w-100 float-start'>
      <div className='container'>
        <figure className='mb-0'>
          <Image width={100} height={40} src={advertiseBanner} alt="Advertise Banner" />
        </figure>
        {/* container */}
      </div>
    </div>
  );
};

export default AdvertiseBanner;