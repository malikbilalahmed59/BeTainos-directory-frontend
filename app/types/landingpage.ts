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


export interface ILandingPage {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    HeaderBar: IHeaderBar | null;
    Header: { Logo: IImage | null };
    Advertisement: { Banner: IImage | null };
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
    }
}interface IListItem {
    id: number;
    Name: string;
}

export interface ICategory {
    id: number;
    documentId: string;
    Heading: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    Description: string | null;
    List: IListItem[];
}