import React from 'react'
import Link from 'next/link';
import { IDirectoryPage } from '@/app/types/types';
import { s3BucketStrapiUrl } from '@/app/helper/helper';
interface Props {
  pageData: IDirectoryPage | undefined
}

const HelpSection = ({ pageData }: Props) => {
  if (pageData)
    return (
      <section className='w-100 float-start help-con' style={{ background: `url(${s3BucketStrapiUrl(pageData?.BannerWithText?.Background)})` }}>
        <div className='container'>
          <div className='help-title'>
            <h4>{pageData?.BannerWithText?.Heading}</h4>
            <p>{pageData?.BannerWithText?.Description}</p>
            <div className='info-btn'><Link href={pageData?.BannerWithText?.ButtonPath || "#"}>{pageData?.BannerWithText?.ButtonLabel}</Link>
              {/* info-btn */}
            </div>
            {/* help-title */}
          </div>
          {/* container */}
        </div>
        {/* help-con */}
      </section >
    )
}
export default HelpSection;