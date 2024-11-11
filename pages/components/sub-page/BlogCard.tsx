
import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { useDirectoryList } from '@/app/hooks/useAPIs';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IconButton, SelectPicker } from 'rsuite';

const BlogCard = () => {
    const { data: list } = useDirectoryList();
    const [type, setType] = useState('');
    const [location, setLocation] = useState('');
    const listD = [...(list?.companie || []), ...(list?.professional || [])];
    const [dataList, setDataList] = useState(listD)
    useEffect(() => {
        // Filter based on type and location
        let filteredData = listD;

        // Filter by type
        if (type === 'Entreprise') {
            filteredData = list?.companie || [];
        } else if (type === 'Professionnel') {
            filteredData = list?.professional || [];
        }

        // Further filter by location if a location is selected
        if (location.trim() !== '') {
            filteredData = filteredData.filter(item => item.PostelAddress === location);
        }

        // Update the data list with filtered results
        setDataList(filteredData);
    }, [type, location, list]);

    return (
        <>
            <div className='w-100 float-start employee-form-con'>
                <div className='container'>
                    <form className='employee-form-box main-contact-form'>
                        <ul className='list-unstyled'>
                            <li>
                                <label className='d-block'>What,who? Business, professional</label>
                                <SelectPicker
                                    className='d-block'
                                    onSelect={(e) => setType(e)}
                                    searchable
                                    size='lg'
                                    style={{}}
                                    data={[
                                        {
                                            value: 'Entreprise',
                                            label: 'Entreprise'
                                        }, {
                                            value: 'Professionnel',
                                            label: 'Professionnel'
                                        }
                                    ]} />
                            </li>
                            <li>
                                <label className='d-block'>where? city, Department, Region</label>
                                <SelectPicker
                                    searchable
                                    size='lg'
                                    className='d-block'

                                    onSelect={(e) => setLocation(e)}
                                    data={
                                        Array.from(new Set([
                                            ...listD.map(item => item.PostelAddress || ''),
                                        ].filter(Boolean)))
                                            .map(loc => ({ value: loc, label: loc }))
                                    } />
                            </li>
                        </ul>
                        <IconButton style={{ background: "red", color: "white" }} icon={<i className="fa-solid fa-magnifying-glass"></i>} type="submit" className="search-btn"></IconButton>
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
                            dataList.map((item => <Link href={'company/' + item.documentId} key={item.id} style={{ textDecoration: 'none' }} className='blog-card-item'>
                                <figure className='mb-0'><Image width={500} height={500} src={s3BucketStrapiUrl(item.Logo || null)} alt="logo" /></figure>
                                <div className='blog-card-content'>
                                    <h5 >{item.Name.slice(0, 19)}...</h5>
                                    <p className='mb-0' style={{ textAlign: 'justify' }}>{item.Description.slice(0, 90)}...</p>
                                    {/* blog-card-content */}
                                </div>
                            </Link>))
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