import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { ILandingPage } from '@/app/types/landingpage';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';

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
              <Image priority width={1000}
                height={479}
                src={s3BucketStrapiUrl(pageData.Advertisement.Banner)} alt={pageData.Advertisement.Banner.alternativeText || ""} />
            </figure>
            {/* container */}
          </div>
        </div>
      }

    </>

  );
};

export default AdvertiseBanner;