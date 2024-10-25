import { NO_IMAGE_FOUND, s3FileUrl } from "../constants/constants";
import { IImage } from "../types/types";
import { isMobile } from "react-device-detect";
import { QueryClient, DehydratedState, dehydrate } from '@tanstack/react-query';

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
        // Use large image for larger screens, falling back to original
        url = image?.formats?.large
            ? `${image.formats.large.hash}${image.formats.large.ext}`
            : `${image.hash}${image.ext}`;
    }

    return `${s3FileUrl}/${url}`;
};
interface PrefetchOptions {
    queryKey: string | string[];
    queryFn: () => Promise<any>;
}
export const prefetchQuery = async ({ queryKey, queryFn }: PrefetchOptions): Promise<{ dehydratedState: DehydratedState }> => {
    const queryClient = new QueryClient();

    // Prefetch the data
    await queryClient.prefetchQuery({
        queryKey: [queryKey],
        queryFn,
    });

    // Return dehydrated state
    return {
        dehydratedState: dehydrate(queryClient),
    };
};
