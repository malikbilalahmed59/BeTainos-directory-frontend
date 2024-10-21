import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { ILandingPage } from '@/app/types/landingpage';
import React from 'react'

interface Props {
  pageData: ILandingPage | undefined
}
const HeroSection = ({ pageData }: Props) => {
  return (
    <section className='w-100 float-start contact-con' style={{ background: `url(${s3BucketStrapiUrl(pageData?.HeroSection.Background || null)})` }}>
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
        <form className='main-contact-form'>
          <ul className='list-unstyled'>
            <li><input type='text' placeholder={pageData?.HeroSection?.SearchLabel1} /></li>
            <li><input type='text' placeholder={pageData?.HeroSection?.SearchLabel2} /></li>
          </ul>
          <button type="submit" className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
          {/* main-contact-form */}
        </form>
        {/* wrapper */}
      </div>
      {/* contact-con */}
    </section>
  )
}
export default HeroSection;