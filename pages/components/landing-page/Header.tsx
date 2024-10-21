import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Logo from "/public/images/logo.jpg"
import { ILandingPage } from '@/app/types/landingpage';

interface Props {
    pageData: ILandingPage | undefined
}
const Header = ({ pageData }: Props) => {
    console.log(pageData)
    return (
        <div className='header-main-con w-100 float-start'>
            {
                pageData?.HeaderBar && <div className='top-bar-con'>
                    <div className='container'>
                        <div className='top-bar-box'>

                            <div className='top-bar-text'>
                                {
                                    pageData?.HeaderBar.Title && <span className='d-block'>{pageData?.HeaderBar.Title}</span>
                                }

                            </div>
                            <div className='top-bar-info'>
                                <div className='input-block'>
                                    <input type='text' placeholder={pageData?.HeaderBar?.search_label || 'Search'} />
                                </div>
                                {
                                    pageData.HeaderBar.Socials && pageData.HeaderBar.Socials.length > 0 &&
                                    <div className='social-icon'>
                                        <ul className='list-unstyled mb-0'>
                                            {
                                                pageData.HeaderBar.Socials.map(s => <li key={s.id}>
                                                    <Link href={s.Link || "#"}>
                                                        <Image src={s.Icon.url} height={20} width={20} alt={s.Icon.alternativeText || s.Name} />
                                                    </Link>
                                                </li>)
                                            }
                                        </ul>
                                        {/* social-icon */}
                                    </div>
                                }

                            </div>
                            {/* top-bar-box */}
                        </div>
                        {/* container */}
                    </div>
                    {/* top-bar */}
                </div>
            }

            <header className=' header-con'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <Link href="/" className="navbar-brand">
                                <figure className='mb-0'>
                                    <Image width={216} height={63} src={Logo} alt="logo" />
                                </figure>
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-lg-0">
                                    <li className="nav-item">
                                        <Link href="/" className="nav-link" aria-current="page">
                                            Directory</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/blog" className="nav-link">
                                            Blog pro</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/offers" className="nav-link">
                                            Offers</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/contact" className="nav-link">
                                            Contact</Link>
                                    </li>
                                </ul>
                                <div className='cart-btn'>
                                    <Link href='#' className="nav-link">
                                        Add</Link>
                                    <Link href='#' className="nav-link">
                                        Login</Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                    {/* container */}
                </div>
                {/* header-con */}
            </header>
            {/* header-main-con */}
        </div>
    )
}
export default Header;
