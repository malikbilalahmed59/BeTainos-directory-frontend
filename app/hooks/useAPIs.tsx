import { ICategory, IComapany } from "../types/landingpage";
import { useGet } from "./common/useGet";

export const useCategories = () => useGet<ICategory[]>('categories-list');
export const useDirectory = () => useGet<IComapany[]>('');
