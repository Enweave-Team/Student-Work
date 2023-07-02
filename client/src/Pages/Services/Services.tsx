import React, {useEffect} from 'react';
import './Services.scss';
import {ReactComponent as FindLoop} from "../../assets/LoopMark.svg";
import PriceCalculating from "../../Components/PriceCalculating/PriceCalculating";
import Footer from "../../Components/Footer/Footer";

interface PageProps {
    onPageChange: (page: string) => void;
}

const Services = ({onPageChange}: PageProps) => {

    useEffect(() => {
        onPageChange('Послуги');
    }, [onPageChange]);

    return (
        <div className='wrapper-services'>
            <span className='span-article'>Послуги</span>
            <div className='search-item'>
                <span className='span-sub-article'>Перелік послуг</span>
                <div className='input-item'>
                    <input type="text"
                           placeholder='Пошук'
                           className='find-input'
                    />
                    <FindLoop className='find-loop-mark'/>
                </div>
            </div>
            <PriceCalculating />
            <Footer/>
        </div>
    );
};

export default Services;