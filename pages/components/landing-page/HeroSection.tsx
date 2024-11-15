import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { ILandingPage } from '@/app/types/landingpage';
import HeroForm from './HeroForm';

interface Props {
  pageData: ILandingPage | undefined
}
const HeroSection = ({ pageData }: Props) => {
  return (
    <section className='w-100 float-start contact-con' style={{ background: `url(${s3BucketStrapiUrl(pageData?.HeroSection?.Background || null)})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className='container'>
        <div className='contact-title'>
          {
            pageData?.HeroSection?.Heading1 && <h3>{pageData?.HeroSection?.Heading1}</h3>
          }
          {
            pageData?.HeroSection?.Heading2 && <span className='d-block'>{pageData?.HeroSection?.Heading2}</span>
          }
          {
            pageData?.HeroSection?.Heading3 && <h2>{pageData?.HeroSection?.Heading3}</h2>
          }
          {/* contact-title */}
        </div>
        <HeroForm pageData={pageData} />
        {/* wrapper */}
      </div>
      {/* contact-con */}
    </section>
  )
}
export default HeroSection;