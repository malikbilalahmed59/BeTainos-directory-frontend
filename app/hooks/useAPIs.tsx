import { ICategory, IComapany } from "../types/landingpage";
import { IDirectoryPage } from "../types/types";
import { fetchData, useGet } from "./common/useGet";

export const useCategories = () => useGet<ICategory[]>('categories-list');
export const useDirectoryList = () => useGet<IComapany[]>('');

export const fetchDirectoryPagetData = async (): Promise<IDirectoryPage[]> => {
    return await fetchData<IDirectoryPage[]>('directory-page');
};
export const useDirectoryPage = () => useGet<IDirectoryPage[]>('directory-page');
