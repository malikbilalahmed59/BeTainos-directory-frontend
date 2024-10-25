import { IImage } from "./types";


interface ISocial {
    id: number;
    Link: string;
    Name: string;
    Icon: IImage;
}

interface IHeaderBar {
    id: number;
    Title: string;
    search_label: string;
    Socials: ISocial[];
}

interface IHeader {
    Banner: IImage | null,
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
    Advertisement: { Banner: IImage[] | [] } | null;
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
            Socials: {
                id: number,
                Link: string,
                Name: string,
                Icon: IImage | null
            }[]
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
interface ISocial {
    id: number;
    Link: string;
    Name: string;
    Icon: IImage;
}

interface ICategoryRel {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string | null;
    locale: string | null;
    Name: string;
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
    Logo: IImage;
    Socials: ISocial[];
    categories_list: ICategoryRel;
}