import { s3BucketStrapiUrl } from '@/app/helper/helper';
import { useDirectoryList } from '@/app/hooks/useAPIs';
import { ILandingPage } from '@/app/types/landingpage';
import React, { useEffect, useState } from 'react'
import { IconButton, SelectPicker } from 'rsuite';

interface Props {
  pageData: ILandingPage | undefined
}
const HeroSection = ({ pageData }: Props) => {
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
    setDataList(filteredData);
  }, [type, list]);
  const renderSelectedItem = (value: any, item: any) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={s3BucketStrapiUrl(item.image)}
        alt={item.title}
        style={{ width: 30, height: 30, marginRight: 8, borderRadius: '50%' }}
      />
      <span>{item.title}</span>
    </div>
  );
  const renderMenuItem = (label: any, item: any) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={s3BucketStrapiUrl(item.image)}
        alt={label}
        style={{ width: 40, height: 40, marginRight: 10, borderRadius: '50%' }}
      />
      <span>{label}</span>
    </div>
  );
  return (
    <section className='w-100 float-start contact-con' style={{ background: `url(${s3BucketStrapiUrl(pageData?.HeroSection?.Background || null)})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className='container'>
        <div className='contact-title'>
          {
            pageData?.HeroSection?.Heading1 && <h3>{pageData?.HeroSection?.Heading1}</h3>
          }
          {
            pageData?.HeroSection?.Heading2 && <span className='d-block'>{pageData?.HeroSection?.Heading2}</span>
          }
          {
            pageData?.HeroSection?.Heading3 && <h2>{pageData?.HeroSection?.Heading3}</h2>
          }
          {/* contact-title */}
        </div>
        <form className='  main-contact-form'>
          <ul className='list-unstyled'>
            <li>
              <label className='d-block'>What,who? Business, professional</label>
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
              <label className='d-block'>where? city, Department, Region</label>
              <SelectPicker
                placeholder={pageData?.HeroSection?.SearchLabel2}
                className="d-block"
                onSelect={(e) => setLocation(e)}
                searchable
                size="lg"
                data={dataList.map(item => ({
                  value: item.id, // Use a unique ID for each item
                  label: item.Name, // Display title
                  image: item.Logo // Image for each item
                }))}
                renderMenuItem={(label, item) => renderMenuItem(label, item)}
                renderValue={(value, item) => renderSelectedItem(value, item)}
              />
            </li>
          </ul>
          <IconButton style={{ background: "red", color: "white" }} icon={<i className="fa-solid fa-magnifying-glass"></i>} type="submit" className="search-btn"></IconButton>
        </form>
        {/* wrapper */}
      </div>
      {/* contact-con */}
    </section>
  )
}
export default HeroSection;