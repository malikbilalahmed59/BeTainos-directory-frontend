import React from 'react';
import Link from 'next/link';

 const MainBanner = () => {
  return (
    <section className='w-100 float-start offer-banner'>
      <div className='container'>
        <div className='offer-banner-title'>
          <h1>Forgotten password create your communication and visibility support with be tainos</h1>
          <span className='d-block'>turnkey websites !</span>
          <ul className='list-unstyled offer-banner-list'>
            <li>Are you a professional? Boost your online business now!</li>
            <li>A website is the essential tool to distinguish yourself form the competition and achieve your business goals.</li>
            <li>We design professional and tailor-made websites that faithfully reflect your brand image.Why choose our service?</li>
          </ul>
          <ul className='list-unstyled offer-list2'>
            <li>Attract more customers</li>
            <li>Strengthen your brand</li>
            <li>Boost your sales</li>
          </ul>
          <div className='contact-btn'>
            <Link href="/">Contact Us</Link>
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
