import React from 'react';
import Link from 'next/link';
import { IDirectoryPage } from '@/app/types/types';
import { s3BucketStrapiUrl } from '@/app/helper/helper';

interface Props {
  pageData: IDirectoryPage | undefined
}
const MainBanner = ({ pageData }: Props) => {
  return (
    <section className='w-100 float-start offer-banner' style={{ background: `url(${s3BucketStrapiUrl(pageData?.Background || null)})` }}>
      <div className='container'>
        <div className='offer-banner-title'>
          <h1>{pageData?.Heading}</h1>
          <span className='d-block'>{pageData?.Heading2}</span>
          <ul className='list-unstyled offer-banner-list'>
            <li>
              {pageData?.Description}
            </li> </ul>
          <ul className='list-unstyled offer-list2'>
            <li>  {pageData?.Tags}</li>
          </ul>
          <div className='contact-btn'>
            <Link href="/contact-us">  {pageData?.Button_Label}</Link>
          </div>
          {/* offer-banner-title */}
        </div>
        {/* container */}
      </div>
      {/* offer-banner */}
    </section>
  )
}
export default MainBanner;
