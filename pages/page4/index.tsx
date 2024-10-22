import React from 'react'
import MainBanner from '../components/sub-page/MainBanner'
import { useLandingPage } from '@/app/hooks/useLandingPage';
import { Categories, Footer, Header } from '../components/landing-page';
import HelpSection from '../components/sub-page/HelpSection';
import BetainosBanner from '../components/sub-page/BetainosBanner';
import Testimonials from '../components/sub-page/Testimonials';


const Index = () => {
    const { data, isLoading } = useLandingPage();
    const pageData = data && data[0];
  return (
    <>
        <Header pageData={pageData} />
        <MainBanner/>
        <BetainosBanner/>
        <Categories />
        <HelpSection />
        <Testimonials />
        <Footer pageData={pageData} />
    </>
  )
}

export default Index