import { handleSocialMedia, s3BucketStrapiUrl } from '@/app/helper/helper';
import { useAds, useDirectoryList } from '@/app/hooks/useAPIs';
import { IComapany } from '@/app/types/landingpage';
import Image from "next/image";
import Link from 'next/link';
import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    LineIcon,
    LineShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    PinterestIcon,
    PinterestShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";
import 'swiper/css';
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from "/public/images/logo.jpg";
import { useRouter } from 'next/router';
interface Props {
    pageData: IComapany | undefined
}
const DirectoryProfile = ({ pageData }: Props) => {
    const router = useRouter();
    const { asPath } = router;
    const linkShare = asPath;

    const { data } = useAds();
    const { data: list } = useDirectoryList();
    const dataList = [...(list?.companie || []), ...(list?.professional || [])];

    return (
        <>
            <section className='transport-banner w-100 float-start'>
                <div className='container'>
                    <div className='transport-banner-box'>
                        <div className='company-logo'>
                            <figure className='mb-0'>
                                <Image width={216} height={63} src={s3BucketStrapiUrl(pageData?.Logo || null) || Logo} alt={pageData?.Logo?.alternativeText || "logo"} /></figure>
                        </div>
                        <div className='company-info'>
                            <h4>{pageData?.Name}</h4>
                            <span className='d-block'>{pageData?.PostelAddress}</span>
                            <ul className='list-unstyled mb-0 company-contact'>
                                <li><small className='d-inline-block'>Tel: </small><Link href={`tel:${pageData?.Phone}`} > &nbsp;{pageData?.Phone}</Link></li>
                            </ul>
                            <span className='d-block text-uppercase'>{pageData?.Category}</span>
                        </div>
                        {
                            pageData?.Socials && pageData?.Socials.length > 0 && <div className='company-social-info'>
                                <span className='d-block'>Suivez-les sur les réseaux sociaux</span>
                                <div className='social-icon'>
                                    <ul className='list-unstyled mb-0'>
                                        {
                                            pageData?.Socials.map(item => <li key={item.id}>
                                                <Link href={item.Link || "#"} target='_blank' >
                                                    {
                                                        handleSocialMedia(item.Name)
                                                    } </Link>
                                            </li>)
                                        }

                                    </ul>
                                    {/* social-icon */}
                                </div>
                                {
                                    pageData?.Website && <div className='visit-site-link'><Link href={pageData?.Website || "#"} target='_blank' >Visitez leur site</Link></div>
                                }

                            </div>
                        }

                        {/* transport-banner-box */}
                    </div>
                    <p className='mb-0'>{pageData?.Description}</p>
                    {/* container */}
                </div>
                {/* transport-banner */}
            </section>
            <section className='w-100 float-start advertisement-box-con'>
                <div className='container'>
                    <div className='advertisement-box'>
                        <div className='advertisement-lft-box'>
                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <span className='d-block'>Partagez le profil de l&apos;entreprise sur les réseaux sociaux</span>
                                    <div className='social-icon'>
                                        <ul className='list-unstyled mb-0'>
                                            <div className="flex w-full max-w-xs flex-wrap items-center justify-center gap-5 py-8">
                                                <EmailShareButton
                                                    url={linkShare}
                                                    className="duration-300 hover:scale-105 hover:brightness-105"
                                                >
                                                    <EmailIcon size={54} round />
                                                </EmailShareButton>
                                                <FacebookShareButton
                                                    url={linkShare}
                                                    className="duration-300 hover:scale-105 hover:brightness-105"
                                                >
                                                    <FacebookIcon size={54} round />
                                                </FacebookShareButton>

                                                <TwitterShareButton
                                                    url={linkShare}
                                                    className="duration-300 hover:scale-105 hover:brightness-105"
                                                >
                                                    <TwitterIcon size={54} round />
                                                </TwitterShareButton>

                                                <WhatsappShareButton
                                                    url={linkShare}
                                                    className="duration-300 hover:scale-105 hover:brightness-105"
                                                >
                                                    <WhatsappIcon size={54} round />
                                                </WhatsappShareButton>
                                                <LineShareButton
                                                    url={linkShare}
                                                    className="duration-300 hover:scale-105 hover:brightness-105"
                                                >
                                                    <LineIcon size={54} round />
                                                </LineShareButton>
                                                <PinterestShareButton
                                                    url={linkShare}
                                                    className="duration-300 hover:scale-105 hover:brightness-105"
                                                    media=""
                                                >
                                                    <PinterestIcon size={54} round />
                                                </PinterestShareButton>
                                                <LinkedinShareButton
                                                    url={linkShare}
                                                    className="duration-300 hover:scale-105 hover:brightness-105"
                                                >
                                                    <LinkedinIcon size={54} round />
                                                </LinkedinShareButton>
                                                <TelegramShareButton
                                                    url={linkShare}
                                                    className="duration-300 hover:scale-105 hover:brightness-105"
                                                >
                                                    <TelegramIcon size={54} round />
                                                </TelegramShareButton>
                                            </div>

                                        </ul>
                                        {/* social-icon */}
                                    </div>
                                </li>
                                {
                                    pageData?.FounderName && <li>
                                        <span className='d-block'>Fondateur ou Directeur</span>
                                        <small className='d-block'>{pageData?.FounderName}</small>
                                    </li>
                                }
                                {
                                    pageData?.CoFounderName && <li>
                                        <span className='d-block'>Co-fondateur(s) ou Co-directeur(s)</span>
                                        <small className='d-block'>{pageData?.CoFounderName}</small>
                                    </li>
                                }

                            </ul>
                        </div>
                        <div className='advertisement-rt-box'>
                            <h4>Advertisement</h4>
                            <Swiper
                                slidesPerView={1}
                                loop={true}
                                autoplay={{
                                    delay: 4500, // Slide transition delay (in ms)
                                    disableOnInteraction: false, // Enable/Disable autoplay on user interaction
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                            >
                                {
                                    data && data[0].SingleCompanyPage.map(slide => <SwiperSlide style={{ cursor: "pointer" }} key={slide.id}>
                                        <Link href={slide.link} target='_blank' className='mb-0'><Image width={300} height={600} src={s3BucketStrapiUrl(slide.Banner || null)} alt={slide.Banner?.alternativeText || "logo"} /></Link>
                                    </SwiperSlide>)
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-100 float-start professional-con'>
                <div className='container'>
                    <div className='professional-title text-center'>
                        <h2>Entreprises ou professionnels similaires</h2>
                    </div>
                    <div className='professional-box'>
                        <div className='professional-item-outer'>
                            <div className='professional-item'>
                                <ul className='list-unstyled mb-0'>
                                    {
                                        dataList.reverse().slice(0, 6).map(item => <li key={item.id}>
                                            <Link href={`/company/${item.documentId}`} className='professional-item-box'>
                                                <figure className='mb-0'><Image width={65} height={43} src={s3BucketStrapiUrl(item?.Logo)} alt={item?.Logo?.alternativeText || "Logo"} /></figure>
                                                <div className='professional-item-content'>
                                                    <h4>{item.Name}</h4>
                                                    <span className='d-inline-block'>{item.Description.slice(0, 100)}...</span>
                                                </div>
                                            </Link>
                                        </li>)
                                    }
                                </ul>
                                {/* professional-item */}
                            </div>
                            <div className='see-more-link text-center'>
                                <Link href="/">Voir plus d&apos;entreprises et de professionnels similaires</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DirectoryProfile