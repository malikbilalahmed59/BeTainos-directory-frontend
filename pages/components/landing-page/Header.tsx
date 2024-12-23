import { handleSocialMedia, s3BucketStrapiUrl } from '@/app/helper/helper';
import { ILandingPage } from '@/app/types/landingpage';
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dropdown } from 'rsuite';

interface Props {
    pageData: ILandingPage | undefined
}
const Header = ({ pageData }: Props) => {
    const router = useRouter();
    // Function to determine if the link is active
    const isActive = (path: string) => new RegExp(`^${path}(/|$)`).test(router.pathname);
    return (
        <div className='header-main-con w-100 float-start'>
            {
                pageData?.HeaderBar && <div className='top-bar-con'>
                    <div className='container'>
                        <div className='top-bar-box'>

                            <div className='top-bar-text'>
                                {
                                    pageData?.HeaderBar.Title && <span className='d-block'>{pageData?.HeaderBar.Title}</span>
                                }
                            </div>
                            <div className='top-bar-info'>
                                <div className='input-block'>
                                    <input type='text' placeholder={pageData?.HeaderBar?.search_label || ''} />
                                </div>
                                {
                                    pageData.HeaderBar.Socials && pageData.HeaderBar.Socials.length > 0 &&
                                    <div className='social-icon'>
                                        <ul className='list-unstyled mb-0'>
                                            {
                                                pageData.HeaderBar.Socials.map(s => <li key={s.id}>
                                                    <Link href={s.Link || "#"}>
                                                        {handleSocialMedia(s.Name)}
                                                    </Link>
                                                </li>)
                                            }
                                        </ul>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            }

            <header className=' header-con'>
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid p-0">
                            <Link href="/" className="navbar-brand">
                                <figure className='mb-0'>
                                    <Image width={200} quality={100} height={63} src={s3BucketStrapiUrl(pageData?.Header?.Logo || null)} alt="Annuaire Betainos Logo" />
                                </figure>
                            </Link>
                            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-lg-0">
                                    {
                                        (pageData?.Header.MenuLink || []).map((item, i) => <li key={item.id} className="nav-item " >
                                            {
                                                i == 0 ? <Dropdown title={'Accueil'}>
                                                    <Dropdown.Item>
                                                        <Link href={item.Link} className="nav-link" style={isActive(item.Link) ? { background: 'red' } : {}} aria-current="page">
                                                            {item.Name}</Link>
                                                    </Dropdown.Item>
                                                    <Dropdown.Item>
                                                        <Link href='/directory' className="nav-link" style={isActive(item.Link) ? { background: 'red' } : {}} aria-current="page">
                                                            Annuaire</Link>
                                                    </Dropdown.Item>
                                                </Dropdown> : <Link href={item.Link} className="nav-link" style={isActive(item.Link) ? { background: 'red' } : {}} aria-current="page">
                                                    {item.Name}</Link>
                                            }

                                        </li>)
                                    }

                                </ul>
                            </div>
                            <div className='cart-btn'>
                                <Dropdown title="Ajouter">
                                    <Dropdown.Item><Link href={'login'}>Entreprise</Link></Dropdown.Item>
                                    <Dropdown.Item><Link href={'https://betainos.com/'} target='_blank'>Evénement</Link></Dropdown.Item>
                                </Dropdown>
                                <Link href='/login' className="nav-link">
                                    Se connecter</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </header >
        </div >
    )
}
export default Header;
