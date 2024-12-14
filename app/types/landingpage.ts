import { IImage } from "./types";


export interface ISocial {
    id: number;
    Link: string;
    Name: string;
}

interface IHeaderBar {
    id: number;
    Title: string;
    search_label: string;
    Socials: ISocial[];
}

interface IHeader {
    Logo: IImage | null,
    MenuLink: {
        id: number,
        Link: string,
        Name: string,
    }[] | []
}

export interface ILandingPage {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    HeaderBar: IHeaderBar | null;
    Header: IHeader;
    Advertisement: {
        id: number,
        link: string,
        Banner: IImage | null
    }[] | null;
    Footer: {
        Logo: IImage | null,
        Description: string,
        LeagalInformation: {
            id: number,
            Heading: string,
            Links: {
                id: number,
                link: string,
                label: string
            }[]
        },
        FollowUs: {
            Heading: string,
            Socials: ISocial[]
        }
    },
    HeroSection: {
        Heading1: string,
        Heading2: string,
        Heading3: string,
        SearchLabel1: string,
        SearchLabel2: string,
        Background: IImage | null
    },
    Directory: {
        Description: string,
        Heading: string,
        BottomDescription: string
    } | null,
    Categories: {
        Description: string,
        Heading: string,
    } | null
}


export interface ICategory {
    id: number;
    documentId: string;
    Name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
}


export interface IComapany {
    id: number;
    documentId: string;
    Name: string;
    PostelAddress: string;
    Phone: string;
    Email: string;
    Website: string;
    CoFounderName: string;
    FounderName: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    locale: string | null;
    ApplicationStatus: string;
    Description: string;
    Logo: IImage | null;
    Socials: ISocial[];
    Category: string;
}
export interface IProfesioanl {
    id: number;
    documentId: string;
    Name: string;
    PostelAddress: string;
    Phone: string;
    Email: string;
    Website: string;
    ApplicationStatus: string;
    Description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    officeHours: string;
    ServicesOffered: string;
    Category: string;
    Logo: IImage | null;
    Socials: ISocial[];
}