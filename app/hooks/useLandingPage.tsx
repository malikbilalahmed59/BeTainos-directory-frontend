import { ILandingPage } from "../types/landingpage";
import { fetchData, useGet } from "./common/useGet";

export const fetchLandingPagetData = async (): Promise<ILandingPage> => {
    return await fetchData<ILandingPage>('landing-page');
};
export const useLandingPage = () => useGet<ILandingPage[]>('landing-page')