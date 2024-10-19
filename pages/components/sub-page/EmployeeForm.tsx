import React from 'react'

const EmployeeForm = () => {
    return (
        <div className='w-100 float-start employee-form-con'>
            <div className='container'>
                <form className='employee-form-box main-contact-form'>
                    <ul className='list-unstyled'>
                        <li>
                            <label className='d-block'>What,who? Business, professional</label>
                            <input type='text' />
                        </li>
                        <li>
                            <label className='d-block'>where? city, Department, Region</label>
                            <input type='text' />
                        </li>
                    </ul>
                    <button type="submit" className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                {/* container */}
            </div>
            {/* employee-form-con */}
        </div>
    )
}
export default EmployeeForm;