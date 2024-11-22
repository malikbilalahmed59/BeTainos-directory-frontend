import React from "react";
import { NO_IMAGE_FOUND, s3FileUrl } from "../constants/constants";
import { IImage } from "../types/types";
import { isMobile } from "react-device-detect";
import { QueryClient, DehydratedState, dehydrate } from '@tanstack/react-query';
import { Facebook, Instagram, Linkedin } from 'lucide-react'
import { FaPinterestP } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineReddit } from "react-icons/ai";
import { PiTelegramLogoLight } from "react-icons/pi";
import { PiDiscordLogo } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

export function handleSocialMedia(platform: string) {
    switch (platform.toLowerCase()) {
        case "facebook":
            return <Facebook />;

        case "instagram":
            return <Instagram />

        case "twitter":
        case " X twitter":
        case "x": // Alternative for Twitter (X)
            return <FaXTwitter />

        case "linkedin":
            return <Linkedin />

        case "tiktok":
            <FaTiktok />

        case "snapchat":
            <FaSnapchat />

        case "pinterest":
            <FaPinterestP />

        case "reddit":
            return <AiOutlineReddit />
        case "youtube":
            return < CiYoutube />

        case "whatsapp":
            return <FaWhatsapp />

        case "telegram":
            return <PiTelegramLogoLight />

        case "discord":
            return <PiDiscordLogo />

        default:
            console.log("Platform not recognized:", platform);
            return <FaXTwitter />
    }
}
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
