import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { useBlogs } from '@/app/hooks/useAPIs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const RecentBlogs = () => {
    const { data } = useBlogs();
    return (
        <>
            <div className="list-group list-box">
                {
                    data?.data.reverse().slice(0, 5).map(cat => <Link href={'blogs/' + cat.documentId} key={cat.id} className="list-group-item d-flex">
                        <Image
                            width={100}
                            height={100}
                            quality={100}
                            src={s3BucketStrapiUrl(cat.Photo)}
                            alt={cat.Photo?.alternativeText || "article thumbnail"}
                            className="me-3"
                        />
                        <div>
                            <h6 className="mb-1">{cat.Title}</h6>
                            <span className="badge bg-secondary me-1">{cat.Category}</span>
                            <small className="text-muted">{cat.Date}</small>
                        </div>
                    </Link>)
                }

            </div>
        </>
    )
}

export default RecentBlogs