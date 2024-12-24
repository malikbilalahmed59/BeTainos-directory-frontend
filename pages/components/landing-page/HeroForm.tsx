import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { useDirectoryList } from '@/app/hooks/useAPIs';
import { useLandingPage } from '@/app/hooks/useLandingPage';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IconButton, SelectPicker } from 'rsuite';

const HeroForm = () => {
    const { data } = useLandingPage();
    const pageData = data && data[0];
    const { data: list, isLoading } = useDirectoryList();
    const [type, setType] = useState('');
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
        setDataList(filteredData);
    }, [type, list]);
    const renderSelectedItem = (value: any, item: any) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
                height={30}
                width={30}
                src={s3BucketStrapiUrl(item.image)}
                alt={item.title}
                style={{ width: 30, height: 30, marginRight: 8, borderRadius: '50%' }}
            />
            <span>{item.title}</span>
        </div>
    );
    const renderMenuItem = (label: any, item: any) => {
        console.log(item)
        return (
            <Link href={'company/' + item?.value} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                <Image
                    src={s3BucketStrapiUrl(item.image)}
                    alt={label}
                    height={40}
                    width={40}
                    style={{ width: 40, height: 40, marginRight: 10, borderRadius: '50%' }}
                />
                <div>
                    <span>{label}</span><br />
                    {item?.PostelAddress && <span style={{ fontSize: 'small' }}>{item?.PostelAddress}</span>}
                </div>
            </Link>
        );
    };
    return (
        <>
            <form className='  main-contact-form'>
                <ul className='list-unstyled'>
                    <li>
                        <label className='d-block'>{pageData?.HeroSection?.SearchLabel1}</label>
                        <SelectPicker
                            placeholder={pageData?.HeroSection?.SearchLabel1}
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
                        <label className='d-block'>{pageData?.HeroSection?.SearchLabel2}</label>

                        <SelectPicker
                            loading={isLoading}
                            placeholder={pageData?.HeroSection?.SearchLabel2}
                            className="d-block"
                            searchable
                            size="lg"
                            data={dataList.map(item => ({
                                ...item,
                                value: item.documentId, // Use a unique ID for each item
                                label: item.Name, // Only show the name in the label
                                searchLabel: `${item.Name} ${item.PostelAddress}`, // Include both Name and PostelAddress in the search criteria
                                image: item.Logo // Image for each item
                            }))}
                            renderMenuItem={(label, item) => renderMenuItem(label, item)}
                            renderValue={(value, item) => renderSelectedItem(value, item)}
                            searchBy={(keyword, label, item) => {
                                const searchString = `${item.Name} ${item.PostelAddress}`.toLowerCase();
                                return searchString.includes(keyword.toLowerCase());
                            }}
                        />
                    </li>
                </ul>
                <IconButton style={{ background: "red", color: "white" }} icon={<i className="fa-solid fa-magnifying-glass"></i>} type="submit" className="search-btn"></IconButton>
            </form>
        </>
    )
}

export default HeroForm