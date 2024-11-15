import { useCategories } from '@/app/hooks/useAPIs';
import { useLandingPage } from '@/app/hooks/useLandingPage';
import Link from 'next/link';

const Categories = () => {
    const { data, isLoading } = useCategories();
    const { data: data2 } = useLandingPage();
    const pageData = data2 && data2[0];
    return (
        <section className='w-100 float-start categories-con'>
            <div className='container'>
                {
                    isLoading ? <> </> : <>
                        {pageData?.Categories?.Heading && <h2>{pageData?.Categories?.Heading}</h2>}
                        <div className='categories-box'>
                            {
                                (data || []).map(item => <div key={item.id} className='categories-box-item'>
                                    <Link href="/">{item.Name}</Link>
                                </div>)
                            }
                        </div>
                    </>
                }
                {
                    pageData?.Categories?.Description && <p><strong>{pageData?.Categories?.Description}</strong></p>
                }
            </div>
        </section>
    )
}
export default Categories;