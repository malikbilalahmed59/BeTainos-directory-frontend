export interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
    sizeInBytes: number;
}

export interface IImage {
    id: number;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        large: ImageFormat;
        small: ImageFormat;
        medium: ImageFormat;
        thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    folderPath: string;
    createdAt: string;
    updatedAt: string;
}
// types/next-page.d.ts  
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};
export interface IDirectoryPage {
    id: number;
    documentId: string;
    Heading: string;
    Heading2: string;
    Description: string;
    Tags: string;
    Button_Label: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    Directory: IDirectory;
    Services: IServices;
    Packages: IPackage[];
    Testimonials: ITestimonial[];
    BannerWithText: ISection,
    Background: IImage | null
}
interface ISection {
    id: number;
    Heading: string;
    Description: string;
    ButtonLabel: string;
    ButtonPath: string;
    Background: IImage | null;
}
interface IDirectory {
    id: number;
    Heading: string;
    Heading2: string;
    Description: string;
    Sites: ISite[];
}

interface ISite {
    id: number;
    Title: string;
    Description: string;
}
interface IBanner {
    Banner: IImage | null,
    Link: string
}
interface IServices {
    id: number;
    Heading: string;
    Needs: INeed[];
    Banner1: IBanner | null,
    Banner2: IBanner | null,
    Banner3: IBanner[] | null,
}

interface INeed {
    id: number;
    Label: string;
}

interface IPackage {
    id: number;
    Name: string;
    Price: string;
    Points: IPoint[];
}

interface IPoint {
    id: number;
    Name: string;
}

interface ITestimonial {
    id: number;
    Label: string;
    Description: string;
}



export interface IAdvertisementResponse {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    SingleCompanyPage: ISingleCompanyPage[];
    BlogsPage: {
        id: number,
        BannerLink: string,
        BannerDate: string,
        PageTitle: string,
        BannerTitle: string,
        PageDescription: string,
        Banner: IImage | null,
        SingleBlogAds1: [],
        SingleBlogAds2: []
    },
    DirectoryPageAds: { id: number, Link: string, Banner: IImage | null }[]
}

interface ISingleCompanyPage {
    id: number;
    link: string;
    Banner: IImage | null;
}

export interface IArticle {
    id: number;
    documentId: string;
    Title: string;
    Author: string;
    Category: 'News' | 'Interviews' | 'Sakpase BeTaïnos';
    Date: string; // Use Date type if you plan to work with date objects in TS, or keep it as string if it's a simple ISO date string
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Description: string;
    Photo: IImage | null
}
export interface IBusiness {
    id: number;
    documentId: string;
    Name: string;
    PostelAddress: string;
    Phone: string;
    Email: string;
    Website: string;
    CoFounderName: string | null;
    FounderName: string;
    ApplicationStatus: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    Description: string;
    FieldOfExpertise: string;
    Category: string | null;
    // Logo: ILogo;
    // Socials: any[];
}