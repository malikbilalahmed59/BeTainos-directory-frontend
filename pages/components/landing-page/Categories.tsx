import React from 'react'
import Link from 'next/link';
import { useCategories } from '@/app/hooks/useCategories';

const Categories = () => {
    const { data, isLoading } = useCategories();
    const pageData = data && data[0]
    return (
        <section className='w-100 float-start categories-con'>
            <div className='container'>
                {
                    isLoading ? <> </> : <>
                        {pageData?.Heading && <h2>{pageData?.Heading}</h2>}

                        <div className='categories-box'>
                            {
                                pageData?.List.map(item => <div key={item.id} className='categories-box-item'>
                                    <Link href="#">{item.Name}</Link>
                                </div>)
                            }

                        </div>
                        {
                            pageData?.Description && <p><strong>{pageData?.Description}</strong></p>
                        }


                    </>
                }

            </div>
        </section>
    )
}
export default Categories;