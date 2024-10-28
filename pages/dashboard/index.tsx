import React from 'react';
import Image from 'next/image';

import logo from "../../public/images/logo.png";

const Page = () => {
    return (
        <>
        <div className='dashboard-header w-100 float-start'>
           <div className='dashboard-header-box'>
              <a id='mobile_btn' className='mobile_btn d-lg-none' href='javascript:void(0)'><i className='fa-solid fa-bars'></i></a>
              <div className='header-logo'>
                 <figure className='mb-0'>
                 <Image src={logo} alt='topboffin-white-logo' width={128} height={45} />
                 </figure>
                 {/* header-logo */}
              </div>
              <div className='header-menu'>
                 <ul className='list-unstyled mb-0'>
                    <li className='position-relative nav-link'>
                        <small className='d-inline-block'>3</small>
                        <a href='javascript:;' className='nav-link'>
                           <i className='fa-regular fa-bell'></i>
                        </a>
                     </li>
                    <li className='position-relative nav-link'>
                      <small className='d-inline-block'>3</small>
                      <a href='javascript:;' className='nav-link'>
                          <i className='fa-regular fa-comment'></i></a>
                      </li>
                    <li className='nav-item dropdown'>
                       <a className='dropdown-toggle person-name' href='#' data-bs-toggle='dropdown' aria-expanded='false'>
                          <div className='user-img position-relative'>
                              <img src='images/avatar.png' className='img-fluid' alt='avatar' /> 
                              <span className='status online'></span>
                          </div>
                       <span className='d-inline-block'>Admin</span>
                       </a>
                       <div className='dropdown-menu dropdown-menu-end'>
                          <a className='dropdown-item' href='#'>My Profile</a>
                          <a className='dropdown-item' href='#'>Settings</a>
                          <a className='dropdown-item' href='#'>Logout</a>
                       </div>
                    </li>
                 </ul>
                 {/* header-menu */}
              </div>
              {/* dashboard-header-box */}
           </div>
           {/* dashboard-header */}
        </div>
        <div className='dashboard-box w-100 float-start'>
          <div id='sidebar-menu'>
              <ul className='sidebar-vertical list-unstyled mb-0'>
                  <li className='menu-title'><span>Main</span></li>
                  <li><a href='#'><i className='la la-dashcube'></i><span>Dashboard</span></a></li>
                  {/* Additional sidebar items */}
              </ul>
          </div>
          <div className='page-wrapper'>
              <div className='content'>
                  <div className='content-header'>
                      <div className='page-title'>
                          <h1>Salary Slip</h1>
                              <ol className='breadcrumb mb-0'>
                                <li className='breadcrumb-item'><a href='#'>Dashboard</a></li>
                                <li className='breadcrumb-item active' aria-current='page'>Payroll</li>
                              </ol>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        </>
    );
};

export default Page;
