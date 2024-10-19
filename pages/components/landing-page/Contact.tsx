import React from 'react'

export const Contact = () => {
  return (
    <section className='w-100 float-start contact-con'>
      <div className='container'>
        <div className='contact-title'>
          <h3>find the contact details</h3>
          <span className='d-block'>of companies professionals</span>
          <h2>near you</h2>
          {/* contact-title */}
        </div>
        <form className='main-contact-form'>
          <ul className='list-unstyled'>
            <li><input type='text' placeholder='What,who ex:Hairdressser,plumber'/></li>
            <li><input type='text' placeholder='What,who ex:Hairdressser,plumber'/></li>
          </ul>
          <button type="submit" className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
          {/* main-contact-form */}
        </form>
        {/* wrapper */}
      </div>
      {/* contact-con */}
    </section>
  )
}
