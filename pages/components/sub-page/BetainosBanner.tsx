import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { IDirectoryPage } from '@/app/types/types';
import Image from "next/image";
interface Props {
  pageData: IDirectoryPage | undefined
}

const BetainosBanner = ({ pageData }: Props) => {
  return (
    <div className='betainos-banner w-100 float-start'>
      {
        pageData?.Services.Banner3?.map(item => <figure key={item.id} className='mb-0'><Image layout="fill"
          objectFit="cover" src={s3BucketStrapiUrl(item)} alt={item.alternativeText || "BetainoBanner"} /></figure>)
      }
    </div>
  )
}
export default BetainosBanner;
