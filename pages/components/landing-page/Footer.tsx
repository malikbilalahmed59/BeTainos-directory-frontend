import React from 'react'
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='w-100 float-start footer-con'>
        <div className='container'>
            <div className='footer-box'>
                <div className='footer-logo'>
                    {/* <Link href="/" className="navbar-brand"><figure className='mb-0'><Image width={216} height={63} src={Logo} alt="logo" /></figure></Link> */}
                    <p></p>
                </div>
                <div className='sitemap'>
                    <h4></h4>
                    <ul className='list-unstyled'>
                        <li><Link href="/"></Link></li>
                        <li><Link href="/"></Link></li>
                        <li><Link href="/"></Link></li>
                    </ul>
                    <p className='mb-0'></p>
                </div>
                <div className='sitemap'>
                    <h4></h4>
                    <ul className='list-unstyled'>
                        <li><Link href="/"></Link></li>
                        <li><Link href="/"></Link></li>
                        <li><Link href="/"></Link></li>
                    </ul>
                    <p className='mb-0'></p>
                </div>

                {/* footer-box */}
            </div>
            {/* container */}
        </div>
        {/* footer-con */}
    </footer>
  )
}
