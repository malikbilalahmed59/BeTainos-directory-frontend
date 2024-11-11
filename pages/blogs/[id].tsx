import React, { useEffect, useState } from 'react'
import Layout from '../layout'
import PageHeader from './PageHeader'
import { useBlogs } from '@/app/hooks/useAPIs';
import Image from 'next/image';
import RecentBlogs from './RecentBlogs';
import { useRouter } from 'next/router';
import { IArticle } from '@/app/types/types';
import { Loader } from 'rsuite';
import { s3BucketStrapiUrl } from '@/app/helper/helper';
import rehypeRaw from 'rehype-raw';
import Markdown from 'react-markdown'
const SingleBlog = () => {
    const { data, isLoading } = useBlogs();
    const [pageData, setPageData] = useState<IArticle>();

    const router = useRouter()
    const { id } = router.query;
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

    if (isLoading) return <Loader />
    return (
        <Layout>
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
                        <div className="social-icons">
                            <a href="#" className="btn btn-link"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="btn btn-link"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="btn btn-link"><i className="bi bi-google"></i></a>
                            <a href="#" className="btn btn-link"><i className="bi bi-linkedin"></i></a>
                            <a href="#" className="btn btn-link"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>
                </div>

                {/* Main Content Section */}
                <div className="row">
                    <div className="col-md-8">
                        <div className="car">
                            <Image
                                src={s3BucketStrapiUrl(pageData?.Photo || null)}
                                alt={pageData?.Photo.alternativeText || ""}
                                width={800}
                                height={400}
                                className="card-img-top"
                            />
                            <div className="card-body" style={{ textAlign: 'justify' }}>
                                <Markdown rehypePlugins={[rehypeRaw]}>{pageData?.Description || ""}</Markdown>

                            </div>
                        </div>
                    </div>

                    {/* Sidebar Section */}
                    <div className="col-md-4">
                        <h4 className="bg-danger text-white p-2">Recent Posts</h4>
                        <RecentBlogs />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SingleBlog