import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import PageHeader from './PageHeader'
import { useAds, useBlogs } from '@/app/hooks/useAPIs';
import Image from 'next/image';
import RecentBlogs from './RecentBlogs';
import { useRouter } from 'next/router';
import { IArticle } from '@/app/types/types';
import { Loader } from 'rsuite';
import { s3BucketStrapiUrl } from '@/app/helper/helper';
import rehypeRaw from 'rehype-raw';
import Markdown from 'react-markdown'
import 'swiper/css';
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
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
import Meta from '../components/Meta';
import Link from 'next/link';
const SingleBlog = () => {
    const { data, isLoading } = useBlogs();
    const [pageData, setPageData] = useState<IArticle>();

    const router = useRouter()
    const { id } = router.query;

    const [linkShare, setShareUrl] = useState('');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            setShareUrl(window.location.href);
        }
    }, [router]);

    useEffect(() => {
        if (!isLoading) {
            const match = data?.data.find(item => item.documentId == id);
            if (match) {
                setPageData(match)
            } else {
                router.push('/404')
            }
        }
    }, [id, isLoading, data, router])
    const { data: ads } = useAds()
    const adsData = ads && ads[0];
    if (isLoading) return <Loader />
    const title = pageData?.Title ?? "PRO Blog des professionnels | BeTaïnos";
    const description = pageData?.Description ?? "Blog d’actualité sur les entreprises et les professionnels.";
    const keywords = "Blog, Professionnels, Entreprises";
    console.log(adsData?.BlogsPage?.SingleBlogAds1)
    return (
        <>
            <Meta
                title={title}
                description={description}
                keywords={keywords}
            />
            <Layout>
                <div className='w-100 float-start'>
                    <div className="container my-5">
                        <PageHeader />
                        <div className="row mb-3">
                            <div className="col">
                                <div className="news-header">
                                    <span className="badge bg-danger text-uppercase">{pageData?.Category}</span>
                                </div>
                                <h1 className="mt-3">{pageData?.Title}</h1>
                                <p style={{ borderTop: "2px solid #9d9d9d", paddingTop: "0.8rem" }} >
                                    By: <strong>{pageData?.Author}</strong> | Published: <strong>{pageData?.publishedAt}</strong>
                                </p>
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
                                </div>
                            </div>
                        </div>

                        {/* Main Content Section */}
                        <div className="row">
                            <div className="col-md-8">
                                <div className="car">
                                    <Image
                                        src={s3BucketStrapiUrl(pageData?.Photo || null)}
                                        alt={pageData?.Photo?.alternativeText || ""}
                                        width={800}
                                        height={400}
                                        className="card-img-top"
                                    />
                                    <div className="card-body card-img" style={{ textAlign: 'justify' }}>
                                        <Markdown rehypePlugins={[rehypeRaw]}>{pageData?.Description || ""}</Markdown>

                                    </div>
                                </div>
                            </div>

                            {/* Sidebar Section */}
                            <div className="col-md-4">
                                <h4 className="bg-danger text-white p-2">Recent Posts</h4>
                                <RecentBlogs />
                                <div className='advertisement-rt-box pt-5'>
                                    <h4>PUBLICITÉ</h4>
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
                                            (adsData?.BlogsPage?.SingleBlogAds1 || []).map((slide: any) => <SwiperSlide style={{ cursor: "pointer" }} key={slide.id}>
                                                <Link href={slide.link} target='_blank' className='mb-0'><Image width={300} quality={100} height={600} src={s3BucketStrapiUrl(slide?.Banner || null)} alt={slide?.Banner?.alternativeText || "logo"} /></Link>
                                            </SwiperSlide>)
                                        }
                                    </Swiper>
                                </div>
                                <div className='advertisement-rt-box pt-5'>
                                    <h4>PUBLICITÉ</h4>
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
                                            (adsData?.BlogsPage?.SingleBlogAds2 || []).map((slide: any) => <SwiperSlide style={{ cursor: "pointer" }} key={slide.id}>
                                                <Link href={slide.link} target='_blank' className='mb-0'><Image width={300} quality={100} height={600} src={s3BucketStrapiUrl(slide?.Banner || null)} alt={slide?.Banner?.alternativeText || "logo"} /></Link>
                                            </SwiperSlide>)
                                        }
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>

    )
}

export default SingleBlog