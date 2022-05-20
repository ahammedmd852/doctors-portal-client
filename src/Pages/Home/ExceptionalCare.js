import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ExceptionalCare = () => {
    return (
        <div className="hero min-h-screen my-20">
            <div className="hero-content flex-col lg:flex-row">
                <img width={'455px'} height={'575px'} className='p-12' src={treatment}  alt=''/>
                <div>
                    <h1 className="text-5xl font-bold font-serif">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ExceptionalCare;