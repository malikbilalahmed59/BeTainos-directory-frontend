import { ICategory, IComapany, IProfesioanl } from "../types/landingpage";
import { IAdvertisementResponse, IArticle, IBusiness, IDirectoryPage } from "../types/types";
import { fetchData, useGet } from "./common/useGet";

export const useCategories = () => useGet<ICategory[]>('categories-list');

export const fetchDirectoryPagetData = async (): Promise<IDirectoryPage[]> => {
    return await fetchData<IDirectoryPage[]>('directory-page');
};
export const useDirectoryPage = () => useGet<IDirectoryPage[]>('directory-page');
export const useBlogs = () => useGet<{ data: IArticle[] }>('blogs?populate[Photo]=*');
export const useAds = () => useGet<IAdvertisementResponse[]>('ads-page');
export const useDirectoryList = () => useGet<{
    professional: [],
    companie: IComapany[]
}>('directory-list');

export const useMyCompanies = () => useGet<{
    companie: IBusiness[],
    professional: IProfesioanl[]
}>('my-companies');
