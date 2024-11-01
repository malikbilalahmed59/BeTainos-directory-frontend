import { IDirectoryPage } from '@/app/types/types';
import React from 'react'

interface Props {
    pageData: IDirectoryPage | undefined
}
const BussinessCard = ({ pageData }: Props) => {
    return (
        <section className='bussiness-card-con w-100 float-start'>
            <div className='container'>
                <h2>Our offers <span className='d-inline-block'>Affaires et Professionnel</span></h2>
                <div className='bussiness-card-box'>
                    {
                        pageData?.Packages.map(pkg => <div key={pkg.id} className='bussiness-card-item'>
                            <h4>{pkg.Name}</h4>
                            <div className='bussiness-card-content'>
                                <small className='d-block'>{pkg.Price}</small>
                                <ul className='mb-0'>
                                    {
                                        pkg.Points.map(item => <li key={item.id}>{item.Name}</li>)
                                    }
                                </ul>
                                {/* bussiness-card-content */}
                            </div>
                            {/* bussiness-card-item */}
                        </div>)
                    }
                    {/* bussiness-card-box */}
                </div>
                <p>Vous souhaitez faire de la publicité sur notre site ? Découvrez nos offres pour les annonceurs en téléchargeant notre <strong>pack publicitaire</strong> et en remplissant le <strong>formulaire</strong></p>

                {/* container */}
            </div>
            {/* bussiness-card-con */}
        </section>
    )
}

export default BussinessCard;