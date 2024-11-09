import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { ILandingPage } from '@/app/types/landingpage';
import Image from "next/image";
import Link from 'next/link';
interface Props {
    pageData: ILandingPage | undefined
}
const Footer = ({ pageData }: Props) => {
    return (
        <footer className='w-100 float-start footer-con'>
            <div className='container'>
                <div className='footer-box'>
                    <div className='footer-logo'>
                        <Link href="/">
                            <figure className='mb-0'><Image width={216} height={63} src={s3BucketStrapiUrl(pageData?.Footer.Logo || null)} alt={pageData?.Footer.Logo?.alternativeText || "Logo"} /></figure>
                        </Link>
                        <p className='mb-0'>{pageData?.Footer.Description}</p>
                    </div>
                    <div className='sitemap'>
                        <h4>{pageData?.Footer.LeagalInformation?.Heading}</h4>
                        <ul className='list-unstyled'>
                            {
                                (pageData?.Footer.LeagalInformation?.Links || []).map(l => <li key={l.id}><Link target='_blank' href={l.link || "#"}>{l.label}</Link></li>)
                            }

                        </ul>
                    </div>
                    <div className='sitemap contact-info'>
                        <h4>{pageData?.Footer.FollowUs?.Heading}</h4>
                        <ul className='list-unstyled footer-social'>
                            {
                                (pageData?.Footer.FollowUs.Socials || []).map(l => <li key={l.id}>
                                    <Link href={l.Link || "#"} target='_blank'><figure className='mb-0'><Image width={30} height={30} src={s3BucketStrapiUrl(l.Icon || null)} alt={pageData?.Footer.Logo?.alternativeText || "Logo"} /></figure></Link></li>)
                            }

                        </ul>
                        <small className='d-block'><Link href="/" >@be_tainos</Link></small>
                    </div>

                    {/* footer-box */}
                </div>
                {/* container */}
            </div>
            {/* footer-con */}
        </footer>
    )
}
export default Footer;
