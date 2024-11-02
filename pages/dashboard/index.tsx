import React, { useEffect, useRef } from 'react';
import { Session } from "next-auth";
import Image from 'next/image';
import logo from "../../public/images/logo.jpg";
import { getSession, signOut } from "next-auth/react";
import { GetServerSideProps } from 'next';
import { Avatar, Dropdown, Popover, Whisper, WhisperInstance } from 'rsuite';
export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
    console.log(session)
    if (!session) {
        return {
            redirect: {
                destination: "/login", // Redirect to your login page
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
};
interface ProtectedPageProps {
    session: Session;
}

const Page = ({ session }: ProtectedPageProps) => {
    console.log("session", session)
    const trigger = useRef<WhisperInstance>(null);
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);
    const renderAdminSpeaker = ({ left, top, className }: any, ref: any) => {

        return (
            <Popover ref={ref} className={className} style={{ left, top }} full>
                <Dropdown.Menu  >
                    <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
                        <p>Signed in as</p>
                        <strong>{session?.user?.username}</strong>
                    </Dropdown.Item>
                    <Dropdown.Item divider />
                    <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
                </Dropdown.Menu>
            </Popover>
        );
    };
    const handleLogout = () => {
        signOut({
            callbackUrl: "/login",
        });
    };
    return (
        <>
            <div className='dashboard-header w-100 float-start'>
                <div className='dashboard-header-box'>
                    <div className='header-logo'>
                        <figure className='mb-0'>
                            <Image src={logo} alt='topboffin-white-logo' width={128} height={45} />
                        </figure>
                    </div>
                    <div className='header-menu'>
                        <ul className='list-unstyled mb-0'>
                            {/* <li>
                                <form className="search-bar position-relative">
                                    <input type="text" placeholder="Search here" />
                                    <button className="search-btn2" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                </form>
                            </li>
                            <li className='position-relative nav-link'>
                                <small className='d-inline-block'>3</small>
                                <button className='nav-link'>
                                    <i className='fa-regular fa-bell'></i>
                                </button>
                            </li>
                            <li className='position-relative nav-link'>
                                <small className='d-inline-block'>3</small>
                                <button className='nav-link'>
                                    <i className='fa-regular fa-comment'></i>
                                </button>
                            </li> */}
                            <li className='nav-item dropdown'>
                                <Whisper placement="bottomEnd" trigger="click" ref={trigger} speaker={renderAdminSpeaker}>
                                    <Avatar
                                        size="sm"
                                        circle

                                        alt={session?.user?.username?.slice(0, 1)}
                                        style={{ marginLeft: 8 }}
                                    />
                                </Whisper>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='dashboard-box w-100 float-start'>
                <div className="page-wrapper">
                    <div className="content">
                        <div className="profile-view position-relative">
                            <div className="profile-img-wrap">
                                <div className="profile-img">
                                    <Avatar
                                        size="sm"
                                        circle

                                        alt={session?.user?.username?.slice(0, 1)}
                                        style={{ marginLeft: 8 }}
                                    />
                                </div>
                                <div className="profile-info-lft">
                                    <h3 className="user-name">{session?.user?.username}</h3>
                                    <h6>{session?.user?.email}</h6>
                                    <div className="staff-id">ID : BT-{session.user.id}</div>
                                    {/* <div className="join-date">Date of Join : 1st Jan 2023</div> */}

                                </div>
                            </div>
                            <div className="personal-rt-info">
                                <div className="personal-info">
                                    <ul>
                                        <li>
                                            <div className="title">Phone:</div>
                                            <div className="text"><a href="javascript:;">9876543210</a></div>
                                        </li>
                                        <li>
                                            <div className="title">Email:</div>
                                            <div className="text"><a href="javascript:;">johndoe@example.com</a></div>
                                        </li>
                                        <li>
                                            <div className="title">Birthday:</div>
                                            <div className="text">24th July</div>
                                        </li>
                                        <li>
                                            <div className="title">Address:</div>
                                            <div className="text"> 1861 Bayonne Ave, Manchester Township, NJ, 08759 </div>
                                        </li>
                                        <li>
                                            <div className="title">Gender:</div>
                                            <div className="text">Male</div>
                                        </li>
                                        <li>
                                            <div className="title">Reports to:</div>
                                            <div className="text">
                                                <div className="avatar-box">
                                                    <div className="avatar avatar-xs">
                                                        <figure className="mb-0">
                                                            <Image src={logo} alt='topboffin-white-logo' width={30} height={30} />
                                                        </figure>
                                                    </div>
                                                    <a href="#"> Jeffery Lalor </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="tab-con">
                            <ul className="nav nav-pills list-unstyled" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Profile</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Projects</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Bank & Statutory &nbsp; <span className="d-inline-block text-danger">(Admin Only)</span></button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab2" data-bs-toggle="pill" data-bs-target="#pills-contact2" type="button" role="tab" aria-controls="pills-contact2" aria-selected="false">Assets</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="profile-box generictab-box">
                                        <h4>Personal Informations</h4>
                                        <div className="personal-info">
                                            <ul >
                                                <li>
                                                    <div className="title">Passport No.</div>
                                                    <div className="text">9876543210</div>
                                                </li>
                                                <li>
                                                    <div className="title">Passport Exp Date.</div>
                                                    <div className="text">9876543210</div>
                                                </li>
                                                <li>
                                                    <div className="title">Tel</div>
                                                    <div className="text"><a href="javascript:;">9876543210</a></div>
                                                </li>
                                                <li>
                                                    <div className="title">Nationality</div>
                                                    <div className="text">Indian</div>
                                                </li>
                                                <li>
                                                    <div className="title">Religion</div>
                                                    <div className="text">Christian</div>
                                                </li>
                                                <li>
                                                    <div className="title">Marital status</div>
                                                    <div className="text">Married</div>
                                                </li>
                                                <li>
                                                    <div className="title">Employment of spouse</div>
                                                    <div className="text">No</div>
                                                </li>
                                                <li>
                                                    <div className="title">No. of children</div>
                                                    <div className="text">2</div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="profile-box generictab-box">
                                        <h4>Emergency Contact</h4>
                                        <h5 className="section-title">Primary</h5>
                                        <div className="personal-info">
                                            <ul>
                                                <li>
                                                    <div className="title">Name</div>
                                                    <div className="text">John Doe</div>
                                                </li>
                                                <li>
                                                    <div className="title">Relationship</div>
                                                    <div className="text">Father</div>
                                                </li>
                                                <li>
                                                    <div className="title">Phone</div>
                                                    <div className="text">9876543210, 9876543210</div>
                                                </li>
                                            </ul>
                                            <hr />
                                            <h5 className="section-title">Secondary</h5>
                                            <ul className="personal-info">
                                                <li>
                                                    <div className="title">Name</div>
                                                    <div className="text">Karen Wills</div>
                                                </li>
                                                <li>
                                                    <div className="title">Relationship</div>
                                                    <div className="text">Brother</div>
                                                </li>
                                                <li>
                                                    <div className="title">Phone</div>
                                                    <div className="text">9876543210, 9876543210</div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="profile-box generictab-box">
                                        <h4>Bank information</h4>
                                        <div className="personal-info">
                                            <ul>
                                                <li>
                                                    <div className="title">Bank name</div>
                                                    <div className="text">ICICI Bank</div>
                                                </li>
                                                <li>
                                                    <div className="title">Bank account No.</div>
                                                    <div className="text">159843014641</div>
                                                </li>
                                                <li>
                                                    <div className="title">IFSC Code</div>
                                                    <div className="text">ICI24504</div>
                                                </li>
                                                <li>
                                                    <div className="title">PAN No</div>
                                                    <div className="text">TC000Y56</div>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="profile-box generictab-box">
                                        <h4>Family Informations</h4>
                                        <div className="profile-main-table">
                                            <table className="table profile-table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Relationship</th>
                                                        <th>Date of Birth</th>
                                                        <th>Phone</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Leo</td>
                                                        <td>Brother</td>
                                                        <td>Feb 16th,2023</td>
                                                        <td>9876543210</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="profile-box generictab-box">
                                        <h4>Education Informations </h4>
                                        <div className="profile-timeline">
                                            <ul className="list-unstyled mb-0">
                                                <li>
                                                    <h6 className="d-block">International College of Arts and Science (UG)</h6>
                                                    <small>Bsc Computer Science</small>
                                                    <small className="d-block">2000 - 2003</small>
                                                </li>
                                                <li>
                                                    <h6 className="d-block">International College of Arts and Science (PG)</h6>
                                                    <small>Msc Computer Science</small>
                                                    <small className="d-block">2000 - 2003</small>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                    <div className="profile-box generictab-box">
                                        <h4>Experience </h4>
                                        <div className="profile-timeline">
                                            <ul className="list-unstyled mb-0">
                                                <li>
                                                    <h6 className="d-block">Web Designer at Zen Corporation</h6>
                                                    <small className="d-block">Jan 2023 - Present (5 years 2 months)</small>
                                                </li>
                                                <li>
                                                    <h6 className="d-block">Web Designer at Ron-tech</h6>
                                                    <small className="d-block">Jan 2023 - Present (5 years 2 months)</small>
                                                </li>
                                                <li>
                                                    <h6 className="d-block">Web Designer at Dalt Technology</h6>
                                                    <small className="d-block">Jan 2023 - Present (5 years 2 months)</small>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                                <div className="tab-pane fade" id="pills-contact2" role="tabpanel" aria-labelledby="pills-contact-tab2">...</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
