import React, { useState } from 'react';
import Layout from '../layout';
import { useBlogs } from '@/app/hooks/useAPIs';
import Image from 'next/image';
import { s3BucketStrapiUrl } from '@/app/helper/helper';

const BlogGridPage = () => {
    const { data } = useBlogs();
    const [activeCategory, setActiveCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);

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

    return (
        <Layout>
            <div className="container my-5">
                <div className="text-center mb-4">
                    <h2 className="text-uppercase">The Pro Blog de Be Taïnos</h2>
                    <p>news and articles on companies and professionals</p>
                </div>

                {/* Search bar */}
                <div className="d-flex justify-content-center mb-4">
                    <input
                        type="text"
                        className="form-control w-50 me-2"
                        placeholder="type here ..."
                    />
                    <button className="btn btn-danger">Search</button>
                </div>

                <div className="row">
                    {/* Main article section */}
                    <div className="col-lg-8 col-md-7 col-12 mb-4">
                        <div className="card border-0">
                            <img
                                src="https://via.placeholder.com/600x400"
                                className="card-img-top"
                                alt="Top 10 of the month"
                            />
                            <div className="card-body text-center">
                                <h4 className="card-title">TOP 10 of the month</h4>
                                <p className="text-muted">03/11/2025</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar with recent articles */}
                    <div className="col-lg-4 col-md-5 col-12">
                        <div className="mb-3">
                            <h5 className="border-bottom pb-2">Recent Articles</h5>
                        </div>
                        <div className="list-group">
                            {
                                data?.data.map(cat => <div className="list-group-item d-flex">
                                    <Image
                                        width={100}
                                        height={100}
                                        src={s3BucketStrapiUrl(cat.Photo)}
                                        alt={cat.Photo.alternativeText || "article thumbnail"}
                                        className="me-3"
                                    />
                                    <div>
                                        <h6 className="mb-1">{cat.Title}</h6>
                                        <span className="badge bg-secondary me-1">{cat.Category}</span>
                                        <small className="text-muted">{cat.Date}</small>
                                    </div>
                                </div>)
                            }

                        </div>
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
                        <div key={article.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
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
                                    <small className="text-white">{article.Description.slice(0, 70)}...</small>
                                    <br />
                                    <small className="text-white">{article.Date}</small>
                                </div>
                            </div>
                        </div>
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
