
import React from 'react'

const MainContactBox = () => {
    return (
        <section className='w-100 float-start main-contact-con'>
            <div className='container'>
                <div className='main-contact-title text-center'>
                    <h2>Contact us</h2>
                    <p>For all request or question, please fill out the from</p>
                    {/* main-contact-title */}
                </div>
                <form className='main-contact-box'>
                    <ul className='list-unstyled'>
                        <li>
                            <label>our name</label>
                            <input type='text' />
                        </li>
                        <li>
                            <label>our email address*</label>
                            <input type='email' />
                        </li>
                        <li>
                            <label>our subject*</label>
                            <input type='text' />
                        </li>
                        <li>
                            <label>Categorie*</label>
                            <input type='text' />
                        </li>
                        <li>
                            <label>Message</label>
                            <textarea name="" id=""></textarea>
                        </li>
                    </ul>
                    <div className='main-form-btn'>
                        <button type='submit'>Send Message</button>
                    </div>
                    {/* main-contact-box */}
                </form>
                {/* container */}
            </div>
            {/* main-contact-con */}
        </section>
    )
}
export default MainContactBox;