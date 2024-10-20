interface IIconFormat {
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

interface IIcon {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        small: IIconFormat;
        thumbnail: IIconFormat;
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
    publishedAt: string;
    locale: string | null;
}
interface ISocial {
    id: number;
    Link: string;
    Name: string;
    Icon: IIcon;
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
    Header: { Logo: IIcon | null };
    Advertisement: { Banner: IIcon | null };
    Footer: {
        Logo: IIcon | null,
        Description: string,
        LeagalInformation: {
            id: number,
            links: {
                id: number,
                link: string,
                label: string
            }[]
        },
        FollowUs: {
            Socials: {
                id: number,
                Link: string,
                Name: string,
                Icon: IIcon | null
            }[]
        }
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