import React from 'react'
import Link from 'next/link';

const HelpSection = () => {
  return (
    <section className='w-100 float-start help-con'>
        <div className='container'>
            <div className='help-title'>
                <h4>Create your website today!</h4>
                <p>The BeTaions team is here to support you</p>
                <div className='info-btn'><Link href="/">I contact BeTainos.fr</Link>
                    {/* info-btn */}
                </div>
                {/* help-title */}
            </div>
            {/* container */}
        </div>
        {/* help-con */}
    </section>
  )
}
export default HelpSection;