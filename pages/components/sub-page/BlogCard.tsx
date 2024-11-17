
import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { useDirectoryList } from '@/app/hooks/useAPIs';
import Image from "next/image";
import Link from 'next/link';
import HeroForm from '../landing-page/HeroForm';
import { useState } from 'react';
import { Pagination } from 'rsuite';

const BlogCard = () => {
    const { data: list } = useDirectoryList();
    const dataList = [...(list?.companie || []), ...(list?.professional || [])];

    const [page, setPage] = useState(1);
    const itemsPerPage = 8;

    const paginatedData = dataList.slice((page - 1) * itemsPerPage, page * itemsPerPage)

    return (
        <>
            <div className='w-100 float-start employee-form-con'>
                <div className='container'>
                    <HeroForm />
                    {/* container */}
                </div>
                {/* employee-form-con */}
            </div>
            <section className='w-100 float-start blog-card-con'>
                <div className='container'>
                    <div className='blog-card-title text-center'>
                        <h2>Liste des entreprises et des professionnels</h2>
                    </div>
                    <div className='blog-card-box'>
                        {
                            paginatedData.map((item => <Link href={'company/' + item.documentId} key={item.id} style={{ textDecoration: 'none' }} className='blog-card-item'>
                                <figure className='mb-0'><Image width={500} height={500} src={s3BucketStrapiUrl(item.Logo || null)} alt="logo" /></figure>
                                <div className='blog-card-content'>
                                    <h5 >{item.Name.slice(0, 19)}...</h5>
                                    <p className='mb-0' style={{ textAlign: 'justify' }}>{item.Description.slice(0, 90)}...</p>
                                    {/* blog-card-content */}
                                </div>
                            </Link>))
                        }

                    </div>
                    <div className="pagination-container text-center my-4">
                        <Pagination
                            prev
                            next
                            first
                            last
                            ellipsis
                            boundaryLinks
                            maxButtons={5}
                            size="md"
                            layout={["total", "-", "pager", "-"]}
                            total={dataList.length}
                            limit={itemsPerPage}
                            activePage={page}
                            onChangePage={setPage}
                        />
                    </div>
                </div>
                {/* blog-card-con */}
            </section>
        </>

    )
}
export default BlogCard;