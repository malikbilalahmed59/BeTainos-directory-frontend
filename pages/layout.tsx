import { useLandingPage } from '@/app/hooks/useLandingPage';
import React, { PropsWithChildren } from 'react'
import { Footer, Header } from './components/landing-page';
import Loader from './components/Loader';

const Layout = ({ children }: PropsWithChildren) => {
    const { data, isLoading } = useLandingPage();
    const pageData = data && data[0];
    if (isLoading) return <Loader />
    return (
        <>
            <Header pageData={pageData} />
            {children}
            <Footer pageData={pageData} />
        </>
    )
}

export default Layout