import React from 'react'
import Link from 'next/link';
import Image from "next/image";
import businessesIcon from "/public/images/businesses-icon.jpeg"
export const ProfessionalBox = () => {
  return (
    <section className='w-100 float-start professional-con'>
        <div className='container'>
            <div className='professional-title text-center'>
                <h2>Similar businesses or professionals</h2>
            </div>
            <div className='professional-box'>
                <div className='professional-item-outer'>
                <div className='professional-item'>
                    <ul className='list-unstyled mb-0'>
                        <li>
                            <div className='professional-item-box'>
                            <figure className='mb-0'><Image width={65} height={43} src={businessesIcon} alt="logo" /></figure>
                                <div className='professional-item-content'>
                                    <h4>abikayo</h4>
                                    <span className='d-inline-block'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                            {/* professional-item-box */}
                            </div>
                        </li>
                        <li>
                            <div className='professional-item-box'>
                            <figure className='mb-0'><Image width={65} height={43} src={businessesIcon} alt="logo" /></figure>
                                <div className='professional-item-content'>
                                    <h4>abikayo</h4>
                                    <span className='d-inline-block'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                            {/* professional-item-box */}
                            </div>
                        </li>
                        <li>
                            <div className='professional-item-box'>
                            <figure className='mb-0'><Image width={65} height={43} src={businessesIcon} alt="logo" /></figure>
                                <div className='professional-item-content'>
                                    <h4>abikayo</h4>
                                    <span className='d-inline-block'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                            {/* professional-item-box */}
                            </div>
                        </li>
                        <li>
                            <div className='professional-item-box'>
                            <figure className='mb-0'><Image width={65} height={43} src={businessesIcon} alt="logo" /></figure>
                                <div className='professional-item-content'>
                                    <h4>abikayo</h4>
                                    <span className='d-inline-block'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                            {/* professional-item-box */}
                            </div>
                        </li>
                    </ul>
                    {/* professional-item */}
                </div>
                    <div className='see-more-link text-center'>
                        <Link href="/">See more similar busssinesses and pros ></Link>
                    </div>
                </div>
                <div className='professional-item-outer'>
                <div className='professional-item'>
                    <ul className='list-unstyled mb-0'>
                        <li>
                            <div className='professional-item-box'>
                            <figure className='mb-0'><Image width={65} height={43} src={businessesIcon} alt="logo" /></figure>
                                <div className='professional-item-content'>
                                    <h4>abikayo</h4>
                                    <span className='d-inline-block'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                            {/* professional-item-box */}
                            </div>
                        </li>
                        <li>
                            <div className='professional-item-box'>
                            <figure className='mb-0'><Image width={65} height={43} src={businessesIcon} alt="logo" /></figure>
                                <div className='professional-item-content'>
                                    <h4>abikayo</h4>
                                    <span className='d-inline-block'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                            {/* professional-item-box */}
                            </div>
                        </li>
                        <li>
                            <div className='professional-item-box'>
                            <figure className='mb-0'><Image width={65} height={43} src={businessesIcon} alt="logo" /></figure>
                                <div className='professional-item-content'>
                                    <h4>abikayo</h4>
                                    <span className='d-inline-block'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                            {/* professional-item-box */}
                            </div>
                        </li>
                        <li>
                            <div className='professional-item-box'>
                            <figure className='mb-0'><Image width={65} height={43} src={businessesIcon} alt="logo" /></figure>
                                <div className='professional-item-content'>
                                    <h4>abikayo</h4>
                                    <span className='d-inline-block'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</span>
                                </div>
                            {/* professional-item-box */}
                            </div>
                        </li>
                    </ul>
                    {/* professional-item */}
                </div>
                    <div className='see-more-link text-center'>
                        <Link href="/">See more similar busssinesses and pros ></Link>
                    </div>
                </div>
                {/* professional-box */}
            </div>
        </div>
        {/* professional-con */}
    </section>
  )
}

