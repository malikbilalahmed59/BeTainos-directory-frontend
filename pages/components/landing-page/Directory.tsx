import { useLandingPage } from '@/app/hooks/useLandingPage';
import Image from 'next/image';
import betaincIcon from '/public/images/betainc-icon.png';

const Directory = () => {
    const { data } = useLandingPage();
    const pageData = data && data[0];
    return (
        <section className='w-100 float-start discover-con'>
            <div className='container'>
                <div className='discover-title'>
                    <p>{pageData?.Directory?.Description}</p>
                    <h2>{pageData?.Directory?.Heading}</h2>
                    {/* discover-title */}
                </div>
                <div className='discover-box'>
                    <div className='discover-box-item'>
                        <figure className='mb-0'>
                            <Image width={79} height={60} src={betaincIcon} alt="Beta Inc Icon" />
                        </figure>
                        <div className='discover-box-content'>
                            <h3>BILolo</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span className='d-inline-block'>Category: Bars, Restaurant</span>
                            {/* discover-box-content */}
                        </div>
                        {/* discover-box-item */}
                    </div>
                    <div className='discover-box-item'>
                        <figure className='mb-0'>
                            <Image width={79} height={60} src={betaincIcon} alt="Beta Inc Icon" />
                        </figure>
                        <div className='discover-box-content'>
                            <h3>BILolo</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span className='d-inline-block'>Category: Bars, Restaurant</span>
                            {/* discover-box-content */}
                        </div>
                        {/* discover-box-item */}
                    </div>
                    <div className='discover-box-item'>
                        <figure className='mb-0'>
                            <Image width={79} height={60} src={betaincIcon} alt="Beta Inc Icon" />
                        </figure>
                        <div className='discover-box-content'>
                            <h3>BILolo</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span className='d-inline-block'>Category: Bars, Restaurant</span>
                            {/* discover-box-content */}
                        </div>
                        {/* discover-box-item */}
                    </div>
                    <div className='discover-box-item'>
                        <figure className='mb-0'>
                            <Image width={79} height={60} src={betaincIcon} alt="Beta Inc Icon" />
                        </figure>
                        <div className='discover-box-content'>
                            <h3>BILolo</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span className='d-inline-block'>Category: Bars, Restaurant</span>
                            {/* discover-box-content */}
                        </div>
                        {/* discover-box-item */}
                    </div>
                    <div className='discover-box-item'>
                        <figure className='mb-0'>
                            <Image width={79} height={60} src={betaincIcon} alt="Beta Inc Icon" />
                        </figure>
                        <div className='discover-box-content'>
                            <h3>BILolo</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span className='d-inline-block'>Category: Bars, Restaurant</span>
                            {/* discover-box-content */}
                        </div>
                        {/* discover-box-item */}
                    </div>
                    <div className='discover-box-item'>
                        <figure className='mb-0'>
                            <Image width={79} height={60} src={betaincIcon} alt="Beta Inc Icon" />
                        </figure>
                        <div className='discover-box-content'>
                            <h3>BILolo</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                            <span className='d-inline-block'>Category: Bars, Restaurant</span>
                            {/* discover-box-content */}
                        </div>
                        {/* discover-box-item */}
                    </div>
                    {/* discover-box */}
                </div>
                <p>{pageData?.Directory?.BottomDescription}</p>
                {/* container */}
            </div>
            {/* discover-con */}
        </section>
    );
};
export default Directory;
