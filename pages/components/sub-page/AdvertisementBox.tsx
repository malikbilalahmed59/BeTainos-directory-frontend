import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import AdvertiseImage from "/public/images/advertisement-img.jpg"

export const AdvertisementBox = () => {
  return (
    <section className='w-100 float-start advertisement-box-con'>
        <div className='container'>
            <div className='advertisement-box'>
                <div className='advertisement-lft-box'>
                    <ul className='list-unstyled mb-0'>
                        <li>
                        <span className='d-block'>Share the company profile on social media</span>
                    <div className='social-icon'>
                        <ul className='list-unstyled mb-0'>
                            <li>
                                <Link href="/"><i className="fa-brands fa-facebook-f"></i></Link>
                            </li>
                            <li>
                                <Link href="/"><i className="fa-brands fa-instagram"></i></Link>
                            </li>
                            <li>
                                <Link href="/"><i className="fa-brands fa-x-twitter"></i></Link>
                            </li>
                            <li>
                                <Link href="/"><i className="fa-brands fa-youtube"></i></Link>
                            </li>
                            <li>
                                <Link href="/"><i className="fa-brands fa-tiktok"></i></Link>
                            </li>
                        </ul>
                        {/* social-icon */}
                    </div>
                        </li>
                        <li>
                        <span className='d-block'>Founder or Manager</span>
                        <small className='d-block'>Julia SURPRISE</small>
                        </li>
                        <li>
                        <span className='d-block'>Co-Founder(s) or Co-Manager(s)</span>
                        <small className='d-block'>Antoine MILLEFEUILLE, Jean Stanislas DUPONT</small>
                        </li>
                    </ul>
                </div>
                <div className='advertisement-rt-box'>
                    <h4>advertisement</h4>
                    <figure className='mb-0'><Image width={216} height={63} src={AdvertiseImage} alt="logo" /></figure>
                </div>
            </div>
            {/* container */}
        </div>
        {/* advertisement-box-con */}
    </section>
  )
}
