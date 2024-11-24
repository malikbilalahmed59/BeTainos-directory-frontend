import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { useLandingPage } from '@/app/hooks/useLandingPage';
import { GetServerSideProps } from 'next';
import { Session } from "next-auth";
import { getSession, signOut } from "next-auth/react";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { Avatar, Dropdown, Popover, Whisper, WhisperInstance } from 'rsuite';
import AddCompany from './AddCompany';
import MyCampnies from './MyCampnies';
import AddProfessional from './AddProfessional';
export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);
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
    const { data } = useLandingPage();
    const pageData = data && data[0];
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
                        <Link href="/" className="navbar-brand">
                            <figure className='mb-0'>
                                <Image width={200} quality={100} height={63} src={s3BucketStrapiUrl(pageData?.Header.Logo || null)} alt="logo" />
                            </figure>
                        </Link>
                    </div>
                    <div className='header-menu'>
                        <ul className='list-unstyled mb-0'>
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
                        </div>
                        <div className="tab-con">
                            <ul className="nav nav-pills list-unstyled" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="pills-company-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-company"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-company"
                                        aria-selected="true"
                                    >
                                        Add Company
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-prof-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-prof"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-prof"
                                        aria-selected="false"
                                    >
                                        Add Professional
                                    </button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="pills-table-tab"
                                        data-bs-toggle="pill"
                                        data-bs-target="#pills-table"
                                        type="button"
                                        role="tab"
                                        aria-controls="pills-table"
                                        aria-selected="false"
                                    >
                                        Companies
                                    </button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pills-company"
                                    role="tabpanel"
                                    aria-labelledby="pills-company-tab"
                                >
                                    <AddCompany />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-prof"
                                    role="tabpanel"
                                    aria-labelledby="pills-prof-tab"
                                >
                                    <AddProfessional />
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="pills-table"
                                    role="tabpanel"
                                    aria-labelledby="pills-table-tab"
                                >
                                    <MyCampnies />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default Page;
