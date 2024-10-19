import React from 'react'
import Link from 'next/link';

const Categories = () => {
    return (
        <section className='w-100 float-start categories-con'>
            <div className='container'>
                <h2>categories</h2>
                <div className='categories-box'>
                    <div className='categories-box-item'>
                        <Link href="/">Trade,Services Professionals</Link>
                        {/* categories-box-item */}
                    </div>
                    <div className='categories-box-item'>
                        <Link href="/">Beauty care,Fashion</Link>
                        {/* categories-box-item */}
                    </div>
                    <div className='categories-box-item'>
                        <Link href="/">House,works Real Estate</Link>
                        {/* categories-box-item */}
                    </div>
                    <div className='categories-box-item'>
                        <Link href="/">Media,Web Communication</Link>
                        {/* categories-box-item */}
                    </div>
                    <div className='categories-box-item'>
                        <Link href="/">Bars,Restaurants</Link>
                        {/* categories-box-item */}
                    </div>
                    <div className='categories-box-item'>
                        <Link href="/">Transport,travel tourism</Link>
                        {/* categories-box-item */}
                    </div>
                    <div className='categories-box-item'>
                        <Link href="/">Foundation,Organization</Link>
                        {/* categories-box-item */}
                    </div>
                    <div className='categories-box-item'>
                        <Link href="/">Employment,Recruitment</Link>
                        {/* categories-box-item */}
                    </div>
                    {/* categories-box */}
                </div>
                <p><strong>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</strong></p>
                {/* container */}
            </div>
            {/* categories-con */}
        </section>
    )
}
export default Categories;