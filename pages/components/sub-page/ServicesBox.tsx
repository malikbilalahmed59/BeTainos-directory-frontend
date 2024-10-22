import React from 'react'

export const ServicesBox = () => {
  return (
    <section className='w-100 float-start services-con'>
        <div className='container'>
            <div className='services-box'>
                <div className='services-box-item'>
                    <figure className='mb-0'>Add image</figure>
                {/* services-box-item */}
                </div>
                <div className='services-box-content'>
                    <h4>For all your needs</h4>
                    <ul className='mb-0'>
                        <li>Logo design</li>
                        <li>Flyer design</li>
                        <li>Business card design</li>
                        <li>Application development</li>
                    </ul>
                {/* services-box-item */}
                </div>
                <div className='services-box-item'>
                    <figure className='mb-0'>Add image</figure>
                {/* services-box-item */}
                </div>
            {/* services-box */}
            </div>
        {/* container */}
        </div>
        {/* services-box */}
    </section>
  )
}

