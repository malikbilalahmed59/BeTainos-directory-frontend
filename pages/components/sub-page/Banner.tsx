import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import Logo from "/public/images/logo.jpg"
const Banner = () => {
    return (
        <section className='transport-banner w-100 float-start'>
            <div className='container'>
                <div className='transport-banner-box'>
                    <div className='company-logo'>
                        <figure className='mb-0'><Image width={216} height={63} src={Logo} alt="logo" /></figure>
                    </div>
                    <div className='company-info'>
                        <h4>bilol</h4>
                        <span className='d-block'>12 rue jules cesar <br /> 90345 SOWETO</span>
                        <ul className='list-unstyled mb-0 company-contact'>
                            <li><small className='d-inline-block'>Tel</small><Link href="/" >+44 734 845 956</Link></li>
                        </ul>
                        <span className='d-block text-uppercase'>transport:moving</span>
                    </div>
                    <div className='company-social-info'>
                        <span className='d-block'>Follow them on social media</span>
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
                        <div className='visit-site-link'><Link href="/" >Visit their site</Link></div>
                    </div>
                    {/* transport-banner-box */}
                </div>
                <p className='mb-0'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like.</p>
                {/* container */}
            </div>
            {/* transport-banner */}
        </section>
    )
}
export default Banner
