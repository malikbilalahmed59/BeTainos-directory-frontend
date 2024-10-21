import { NO_IMAGE_FOUND, s3FileUrl } from "../constants/constants";
import { IImage } from "../types/types";
import { isMobile } from "react-device-detect";

export const s3BucketStrapiUrl = (image: IImage | null) => {
    if (!image) return NO_IMAGE_FOUND;

    let url;

    if (isMobile) {
        // Use small image for mobile, falling back to thumbnail or original
        url = image?.formats?.small
            ? `${image.formats.small.hash}${image.formats.small.ext}`
            : image?.formats?.thumbnail
                ? `${image.formats.thumbnail.hash}${image.formats.thumbnail.ext}`
                : `${image.hash}${image.ext}`;
    } else {
        console.log(";arge")
        // Use large image for larger screens, falling back to original
        url = image?.formats?.large
            ? `${image.formats.large.hash}${image.formats.large.ext}`
            : `${image.hash}${image.ext}`;
        console.log(`${s3FileUrl}/${url}`)
    }

    return `${s3FileUrl}/${url}`;
};
