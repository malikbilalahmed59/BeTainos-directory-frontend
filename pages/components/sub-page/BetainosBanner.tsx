import React from 'react'
import Image from "next/image";
import BetainoBanner from "../../../public/images/betaino-banner.jpeg"

 const BetainosBanner = () => {
  return (
    <div className='betainos-banner w-100 float-start'>
        <figure className='mb-0'><Image   layout="fill" 
            objectFit="cover" src={BetainoBanner} alt="BetainoBanner" /></figure>
    </div>
  )
}
export default BetainosBanner;
