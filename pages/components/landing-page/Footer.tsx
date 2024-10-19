import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Logo from "/public/images/logo.jpg"

export const Footer = () => {
  return (
    <footer className='w-100 float-start footer-con'>
        <div className='container'>
            <div className='footer-box'>
                <div className='footer-logo'>
                    <Link href="/">
                        <figure className='mb-0'><Image width={216} height={63} src={Logo} alt="logo" /></figure>
                    </Link>
                    <p className='mb-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <div className='sitemap'>
                    <h4>legal information</h4>
                    <ul className='list-unstyled'>
                        <li><Link href="/">CGU</Link></li>
                        <li><Link href="/">Privacy Policy</Link></li>
                        <li><Link href="/">Legal notices</Link></li>
                    </ul>
                    <p className='mb-0'>SIREN:513 497 271 <br/> Code AP:63.12Z</p>
                </div>
                <div className='sitemap contact-info'>
                    <h4>follow us</h4>
                    <ul className='list-unstyled footer-social'>
                        <li><Link href="/"><i className="fa-brands fa-facebook-f"></i></Link></li>
                        <li><Link href="/"><i className="fa-brands fa-instagram"></i></Link></li>
                        <li><Link href="/"><i className="fa-brands fa-x-twitter"></i></Link></li>
                        <li><Link href="/"><i className="fa-brands fa-youtube"></i></Link></li>
                        <li><Link href="/"><i className="fa-brands fa-tiktok"></i></Link></li>
                    </ul>
                    <small className='d-block'><Link href="/">@be_tainos</Link></small>
                </div>

                {/* footer-box */}
            </div>
            {/* container */}
        </div>
        {/* footer-con */}
    </footer>
  )
}
