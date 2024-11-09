import { useAds } from '@/app/hooks/useAPIs';
import React from 'react'

const PageHeader = () => {
    const { data: ads } = useAds()
    const adsData = ads && ads[0];
    return (
        <>
            <div className="text-center mb-4">
                <h2 className="text-uppercase">{adsData?.BlogsPage?.PageTitle}</h2>
                <p>{adsData?.BlogsPage?.PageDescription}</p>
            </div>
        </>
    )
}

export default PageHeader