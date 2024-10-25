import { IDirectoryPage } from '@/app/types/types';
import React from 'react'

interface Props {
    pageData: IDirectoryPage | undefined
}

const DevelopmentServices = ({ pageData }: Props) => {
    return (
        <section className='w-100 float-start development-con'>
            <div className='container'>
                <div className='development-title'>
                    <h2>{pageData?.Directory?.Heading}</h2>
                    <span className='d-block'>{pageData?.Directory?.Heading2}</span>
                    <p>{pageData?.Directory?.Description}</p>
                </div>
                <div className='development-box'>
                    {
                        (pageData?.Directory.Sites || []).map((item) => <div key={item.id} className='development-box-item'>
                            <h4>{item.Title}</h4>
                            <div className='development-box-content'>
                                <p className='mb-0'>{item.Description}</p>

                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    )
}
export default DevelopmentServices;