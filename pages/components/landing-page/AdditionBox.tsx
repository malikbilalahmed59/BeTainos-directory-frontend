import React from 'react';
import Image from 'next/image';
import betaincIcon from '/public/images/betainc-icon.png'; // Corrected import name

export const AdditionBox = () => {
    return (
        <section className='w-100 float-start discover-con'>
            <div className='container'>
                <div className='discover-title'>
                    <p>Are you looking for contact details of a company or professional in your community?Find them on the <strong>BeTaions directory</strong></p>
                    <h2>discover the new additions</h2>
                    {/* discover-title */}
                </div>
                <div className='discover-box'>
                    <div className='discover-box-item'>
                        <figure className='mb-0'>
                            <Image width={79} height={60} src={betaincIcon} alt="Beta Inc Icon" />
                        </figure>
                        <div className='discover-box-content'>
                            <h3>BILolo</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span className='d-inline-block'>Category: Bars, Restaurant</span>
                            {/* discover-box-content */}
                        </div>
                        {/* discover-box-item */}
                    </div>
                    <div className='discover-box-item'>
                        <figure className='mb-0'>
                            <Image width={79} height={60} src={betaincIcon} alt="Beta Inc Icon" />
                        </figure>
                        <div className='discover-box-content'>
                            <h3>BILolo</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span className='d-inline-block'>Category: Bars, Restaurant</span>
                            {/* discover-box-content */}
                        </div>
                        {/* discover-box-item */}
                    </div>
                    <div className='discover-box-item'>
                        <figure className='mb-0'>
                            <Image width={79} height={60} src={betaincIcon} alt="Beta Inc Icon" />
                        </figure>
                        <div className='discover-box-content'>
                            <h3>BILolo</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span className='d-inline-block'>Category: Bars, Restaurant</span>
                            {/* discover-box-content */}
                        </div>
                        {/* discover-box-item */}
                    </div>
                    <div className='discover-box-item'>
                        <figure className='mb-0'>
                            <Image width={79} height={60} src={betaincIcon} alt="Beta Inc Icon" />
                        </figure>
                        <div className='discover-box-content'>
                            <h3>BILolo</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span className='d-inline-block'>Category: Bars, Restaurant</span>
                            {/* discover-box-content */}
                        </div>
                        {/* discover-box-item */}
                    </div>
                    <div className='discover-box-item'>
                        <figure className='mb-0'>
                            <Image width={79} height={60} src={betaincIcon} alt="Beta Inc Icon" />
                        </figure>
                        <div className='discover-box-content'>
                            <h3>BILolo</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span className='d-inline-block'>Category: Bars, Restaurant</span>
                            {/* discover-box-content */}
                        </div>
                        {/* discover-box-item */}
                    </div>
                    <div className='discover-box-item'>
                        <figure className='mb-0'>
                            <Image width={79} height={60} src={betaincIcon} alt="Beta Inc Icon" />
                        </figure>
                        <div className='discover-box-content'>
                            <h3>BILolo</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span className='d-inline-block'>Category: Bars, Restaurant</span>
                            {/* discover-box-content */}
                        </div>
                        {/* discover-box-item */}
                    </div>
                    {/* discover-box */}
                </div>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using <strong>Content here, content here, making it look like readable English.</strong></p>
                {/* container */}
            </div>
            {/* discover-con */}
        </section>
    );
};
