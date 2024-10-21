import { NO_IMAGE_FOUND, s3FileUrl } from "../constants/constants";
import { IImage } from "../types/types";
import { isBrowser } from "react-device-detect";
export const s3BucketStrapiUrl = (image: IImage | null) => {
    const url = isBrowser
        ? `${image?.hash}${image?.ext}`
        : image?.formats?.small
            ? `${image?.formats?.small?.hash}${image?.formats?.small?.ext}`
            : image?.formats?.thumbnail
                ? `${image?.formats?.thumbnail?.hash}${image?.formats?.thumbnail?.ext}`
                : `${image?.hash}${image?.ext}`
                    ? `${image?.hash}${image?.ext}`
                    : null;

    return image ? `${s3FileUrl}/${url}` : NO_IMAGE_FOUND;
};