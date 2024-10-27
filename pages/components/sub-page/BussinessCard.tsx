import React from 'react'

const BussinessCard = () => {
    return (
        <section className='bussiness-card-con w-100 float-start'>
            <div className='container'>
                <h2>Our offers <span className='d-inline-block'>Bussiness & Professional</span></h2>
                <div className='bussiness-card-box'>
                    <div className='bussiness-card-item'>
                        <h4>Gomobo Starter</h4>
                        <div className='bussiness-card-content'>
                            <small className='d-block'>Free</small>
                            <ul className='mb-0'>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dumm.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dumm.</li>
                            </ul>
                            {/* bussiness-card-content */}
                        </div>
                        {/* bussiness-card-item */}
                    </div>
                    <div className='bussiness-card-item'>
                        <h4>Grenadia Power</h4>
                        <div className='bussiness-card-content'>
                            <small className='d-block'>99 € HTC</small>
                            <ul className='mb-0'>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dumm.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dumm.</li>
                            </ul>
                            {/* bussiness-card-content */}
                        </div>
                        {/* bussiness-card-item */}
                    </div>
                    <div className='bussiness-card-item'>
                        <h4>Mangue Premium</h4>
                        <div className='bussiness-card-content'>
                            <small className='d-block'>149 € HTC</small>
                            <ul className='mb-0'>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dumm.</li>
                                <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dumm.</li>
                            </ul>
                            {/* bussiness-card-content */}
                        </div>
                        {/* bussiness-card-item */}
                    </div>
                    {/* bussiness-card-box */}
                </div>
                <p>Do You Want to advertise on our site? discover our offers for advertisers by downloading our <strong>Advertising pack</strong> and fil out the <strong>form</strong></p>
                {/* container */}
            </div>
            {/* bussiness-card-con */}
        </section>
    )
}

export default BussinessCard;