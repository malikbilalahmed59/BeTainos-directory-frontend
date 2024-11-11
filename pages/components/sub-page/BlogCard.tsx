
import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { useDirectoryList } from '@/app/hooks/useAPIs';
import Image from "next/image";

const BlogCard = () => {
    const { data: list } = useDirectoryList();
    const dataList = [...(list?.companie || []), ...(list?.professional || [])];
    return (
        <>
            <div className='w-100 float-start employee-form-con'>
                <div className='container'>
                    <form className='employee-form-box main-contact-form'>
                        <ul className='list-unstyled'>
                            <li>
                                <label className='d-block'>What,who? Business, professional</label>
                                <input type='text' />
                            </li>
                            <li>
                                <label className='d-block'>where? city, Department, Region</label>
                                <input type='text' />
                            </li>
                        </ul>
                        <button type="submit" className="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                    {/* container */}
                </div>
                {/* employee-form-con */}
            </div>
            <section className='w-100 float-start blog-card-con'>
                <div className='container'>
                    <div className='blog-card-title text-center'>
                        <h2>Liste des entreprises et des professionnels</h2>
                    </div>
                    <div className='blog-card-box'>
                        {
                            dataList.map((item => <div key={item.id} className='blog-card-item'>
                                <figure className='mb-0'><Image width={500} height={500} src={s3BucketStrapiUrl(item.Logo || null)} alt="logo" /></figure>
                                <div className='blog-card-content'>
                                    <h5 >{item.Name.slice(0, 19)}...</h5>
                                    <p className='mb-0' style={{ textAlign: 'justify' }}>{item.Description.slice(0, 90)}...</p>
                                    {/* blog-card-content */}
                                </div>
                            </div>))
                        }

                    </div>
                    {/* container */}
                </div>
                {/* blog-card-con */}
            </section>
        </>

    )
}
export default BlogCard;