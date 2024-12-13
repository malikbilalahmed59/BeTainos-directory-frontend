import Head from "next/head";
interface Props {
    title: string,
    description: string,
    keywords: string
}
const Meta = ({ title, description, keywords }: Props) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ""} />
            <meta
                property="og:image"
                content="https://betainos-cms.s3.eu-north-1.amazonaws.com/favicon_0063ccdbf4.jpeg"
            />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
    );
};

export default Meta;
