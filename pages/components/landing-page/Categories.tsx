import React from 'react'
import Link from 'next/link';
import { useCategories } from '@/app/hooks/useAPIs';
import { ILandingPage } from '@/app/types/landingpage';

interface Props {
    pageData: ILandingPage | undefined
}
const Categories = ({ pageData }: Props) => {
    const { data, isLoading } = useCategories();

    return (
        <section className='w-100 float-start categories-con'>
            <div className='container'>
                {
                    isLoading ? <> </> : <>
                        {pageData?.Categories?.Heading && <h2>{pageData?.Categories?.Heading}</h2>}
                        <div className='categories-box'>
                            {
                                (data || []).map(item => <div key={item.id} className='categories-box-item'>
                                    <Link href="#">{item.Name}</Link>
                                </div>)
                            }
                        </div>
                    </>
                }
                {
                    pageData?.Categories?.Description && <p><strong>{pageData?.Categories?.Description}</strong></p>
                }
            </div>
        </section>
    )
}
export default Categories;