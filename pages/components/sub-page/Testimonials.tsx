import { IDirectoryPage } from '@/app/types/types';
import React from 'react'

interface Props {
  pageData: IDirectoryPage | undefined
}
export const Testimonials = ({ pageData }: Props) => {
  return (
    <div className='testimonials-con w-100 float-start'>
      <div className='container'>
        {
          (pageData?.Testimonials || []).map(item => <div key={item.id} className='text-center testimonials-title'>
            <span className='d-block'>{item.Label}</span>
            <p>{item.Description}</p>
          </div>)
        }

      </div>
    </div>
  )
}
export default Testimonials;
