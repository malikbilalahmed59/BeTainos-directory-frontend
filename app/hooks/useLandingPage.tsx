import { ILandingPage } from "../types/landingpage";
import { useGet } from "./common/useGet";

export const useLandingPage = () => useGet<ILandingPage[]>('landing-page')