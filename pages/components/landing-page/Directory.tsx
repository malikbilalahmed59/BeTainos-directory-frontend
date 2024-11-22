import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { useDirectoryList } from '@/app/hooks/useAPIs';
import { useLandingPage } from '@/app/hooks/useLandingPage';
import Image from 'next/image';
import Link from 'next/link';

const Directory = () => {
    const { data } = useLandingPage();
    const pageData = data && data[0];
    const { data: list } = useDirectoryList()
    return (
        <section className='w-100 float-start discover-con'>
            <div className='container'>
                <div className='discover-title'>
                    <p>{pageData?.Directory?.Description}</p>
                    <h2>{pageData?.Directory?.Heading}</h2>
                    {/* discover-title */}
                </div>
                {
                    <div className='discover-box'>
                        {
                            list?.companie.reverse().slice(0, 6).map(card =>
                                <Link href={'company/' + card.documentId || "#"} key={card.id} className='discover-box-item'>
                                    <figure className='mb-0'>
                                        <Image width={154} height={154} src={s3BucketStrapiUrl(card?.Logo)} alt={card?.Logo.alternativeText || "Beta Inc Icon"} />
                                    </figure>
                                    <div className='discover-box-content'>
                                        <h3>{card?.Name.slice(0, 25)}</h3>
                                        <p>{card?.Description.slice(0, 110)}...</p>
                                        <span className='d-inline-block'>Category: {card?.Category}</span>
                                        {/* discover-box-content */}
                                    </div>
                                    {/* discover-box-item */}
                                </Link>)
                        }
                        {/* discover-box */}
                    </div>
                }

                <p>{pageData?.Directory?.BottomDescription}</p>
                {/* container */}
            </div>
            {/* discover-con */}
        </section>
    );
};
export default Directory;
