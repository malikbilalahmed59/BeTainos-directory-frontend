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

interface IServices {
    id: number;
    Heading: string;
    Needs: INeed[];
    Banner1: IImage | null,
    Banner2: IImage | null,
    Banner3: IImage[] | null,
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
    data: IAdvertisementData[];
}

interface IAdvertisementData {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    SingleCompanyPage: ISingleCompanyPage[];
}

interface ISingleCompanyPage {
    id: number;
    link: string;
    Banner: IImage;
}