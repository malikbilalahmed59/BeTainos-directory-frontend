import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { useAds, useDirectoryList } from '@/app/hooks/useAPIs';
import { IComapany } from '@/app/types/landingpage';
import Image from "next/image";
import Link from 'next/link';
import 'swiper/css';
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import businessesIcon from "/public/images/businesses-icon.jpeg";
import Logo from "/public/images/logo.jpg";

interface Props {
    pageData: IComapany | undefined
}
const DirectoryProfile = ({ pageData }: Props) => {
    const { data } = useAds();
    const { data: list } = useDirectoryList();
    const dataList = [...(list?.companie || []), ...(list?.professional || [])];
    console.log(" flat list", dataList);

    return (
        <>
            <section className='transport-banner w-100 float-start'>
                <div className='container'>
                    <div className='transport-banner-box'>
                        <div className='company-logo'>
                            <figure className='mb-0'>
                                <Image width={216} height={63} src={s3BucketStrapiUrl(pageData?.Logo || null) || Logo} alt={pageData?.Logo.alternativeText || "logo"} /></figure>
                        </div>
                        <div className='company-info'>
                            <h4>{pageData?.Name}</h4>
                            <span className='d-block'>{pageData?.PostelAddress}</span>
                            <ul className='list-unstyled mb-0 company-contact'>
                                <li><small className='d-inline-block'>Tel: </small><Link href={`tel:${pageData?.Phone}`} > &nbsp;{pageData?.Phone}</Link></li>
                            </ul>
                            <span className='d-block text-uppercase'>{pageData?.categories_list?.Name}</span>
                        </div>
                        {
                            pageData?.Socials && pageData?.Socials.length > 0 && <div className='company-social-info'>
                                <span className='d-block'>Suivez-les sur les réseaux sociaux</span>
                                <div className='social-icon'>
                                    <ul className='list-unstyled mb-0'>
                                        {
                                            pageData?.Socials.map(item => <li key={item.id}>
                                                <Link href={item.Link || "#"} target='_blank' >
                                                    <Image src={item.Icon.url} height={20} width={20} alt={item.Icon.alternativeText || item.Name} /></Link>
                                            </li>)
                                        }

                                    </ul>
                                    {/* social-icon */}
                                </div>
                                {
                                    pageData?.Website && <div className='visit-site-link'><Link href={pageData?.Website || "#"} >Visitez leur site</Link></div>
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
                                            <li>
                                                <Link href="/"><i className="fa-brands fa-facebook-f"></i></Link>
                                            </li>
                                            <li>
                                                <Link href="/"><i className="fa-brands fa-instagram"></i></Link>
                                            </li>
                                            <li>
                                                <Link href="/"><i className="fa-brands fa-x-twitter"></i></Link>
                                            </li>
                                            <li>
                                                <Link href="/"><i className="fa-brands fa-youtube"></i></Link>
                                            </li>
                                            <li>
                                                <Link href="/"><i className="fa-brands fa-tiktok"></i></Link>
                                            </li>
                                        </ul>
                                        {/* social-icon */}
                                    </div>
                                </li>
                                {
                                    pageData?.FounderName && <li>
                                        <span className='d-block'>Fondateur ou Directeur</span>
                                        <small className='d-block'>J{pageData?.FounderName}</small>
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
                                    delay: 12000, // Slide transition delay (in ms)
                                    disableOnInteraction: false, // Enable/Disable autoplay on user interaction
                                }}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Autoplay, Pagination, Navigation]}
                            >
                                {
                                    data?.data && data.data[0].SingleCompanyPage.map(slide => <SwiperSlide key={slide.id}>
                                        <figure className='mb-0'><Image width={256} height={256} src={s3BucketStrapiUrl(slide.Banner || null)} alt={slide.Banner.alternativeText || "logo"} /></figure>
                                    </SwiperSlide>)
                                }
                            </Swiper>
                        </div>
                    </div>
                    {/* container */}
                </div>
                {/* advertisement-box-con */}
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
                                        dataList.map(item => <li>
                                            <Link href={`/company/${item.documentId}`} className='professional-item-box'>
                                                <figure className='mb-0'><Image width={65} height={43} src={s3BucketStrapiUrl(item.Logo)} alt={item.Logo.alternativeText || "Logo"} /></figure>
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
                        {/* professional-box */}
                    </div>
                </div>
                {/* professional-con */}
            </section>
        </>
    )
}

export default DirectoryProfile