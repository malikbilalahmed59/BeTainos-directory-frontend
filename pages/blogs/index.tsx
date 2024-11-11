import React, { useState } from 'react';
import Layout from '../layout';
import { useAds, useBlogs } from '@/app/hooks/useAPIs';
import Image from 'next/image';
import { s3BucketStrapiUrl } from '@/app/helper/helper';
import Link from 'next/link';
import PageHeader from './PageHeader';
import RecentBlogs from './RecentBlogs';

const BlogGridPage = () => {
    const { data } = useBlogs();
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const { data: ads } = useAds()
    const adsData = ads && ads[0];
    const categories = ["All", "News", "Interviews", "Sakpase BeTaïnos"];
    const itemsPerPage = 8;

    const handleCategoryClick = (category: string) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const handlePageClick = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const filteredArticles = activeCategory === "All"
        ? data?.data || []
        : (data?.data || []).filter((article) => article.Category === activeCategory);

    const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);

    const paginatedArticles = filteredArticles.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    console.log(adsData, 'ads')
    return (
        <Layout>
            <div className="container my-5">
                <PageHeader />
                {/* Search bar */}
                <div className="d-flex justify-content-center mb-4 input-block">
                    <input
                        type="text"
                        className=" w-50 me-2 search-button-input"
                        placeholder="type here ..."
                    />
                    <button className="btn btn-danger search-button">Search</button>
                </div>

                <div className="row">
                    {/* Main article section */}
                    <div className="col-lg-8 col-md-7 col-12 mb-4">
                        <div className="card border-0">
                            <Link href={adsData?.BlogsPage.BannerLink || "#"} target='_blank'>
                                <Image
                                    height={600}
                                    width={600}
                                    quality={100}
                                    src={s3BucketStrapiUrl(adsData?.BlogsPage.Banner || null)}
                                    className="card-img-top"
                                    alt={adsData?.BlogsPage.Banner.alternativeText || adsData?.BlogsPage?.BannerTitle || "Banner"}
                                />
                            </Link>
                            <div className="card-body px-0 d-flex justify-content-between justify-items-center">
                                <h4 className="card-title">{adsData?.BlogsPage?.BannerTitle}</h4>
                                <p className="text-muted mb-0 pt-1">{adsData?.BlogsPage?.BannerDate}</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar with recent articles */}
                    <div className="col-lg-4 col-md-5 col-12">
                        <RecentBlogs />
                    </div>
                </div>
            </div>

            <div className="container my-5">
                {/* Category Filter */}
                <div className="d-flex justify-content-center mb-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`btn mx-2 ${activeCategory === category ? "btn-danger" : "btn-outline-danger"}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Articles Grid */}
                <div className="row">
                    {paginatedArticles.map((article) => (
                        <Link style={{ textDecoration: 'none' }} href={'blogs/' + article.documentId} key={article.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                            <div className="card h-100 border-0 shadow">
                                <Image
                                    width={100}
                                    height={200}
                                    src={s3BucketStrapiUrl(article.Photo)}
                                    className="card-img-top"
                                    alt={article.Title}
                                />
                                <div className="card-body p-2 bg-danger text-white">
                                    <h6 className="card-title mb-1">{article.Title}</h6>
                                    {/* <small className="text-white">{article.Description.slice(0, 70)}...</small> */}
                                    {/* <br /> */}
                                    {/* <small className="text-white">{article.Date}</small> */}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Dynamic Pagination */}
                <div className="d-flex justify-content-center mt-4">
                    <nav>
                        <ul className="pagination">
                            {Array.from({ length: totalPages }, (_, index) => (
                                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? "active" : ""}`}>
                                    <button className="page-link" onClick={() => handlePageClick(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </Layout>
    );
};

export default BlogGridPage;
