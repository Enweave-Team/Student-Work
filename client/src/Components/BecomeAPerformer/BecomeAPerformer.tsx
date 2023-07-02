import React from 'react';
import './BecomeAPerformer.scss'
import InfoBlock from "../../Components/AboutUs/InfoBlock";

const BecomeAPerformer = () => {
    return (
        <div className='wrapper-become-performer'>
            <div className='become-performer-item'>
                <span className='span-sub-article'>Як стати <span className='span-br'>виконавцем</span></span>
                <div className='info-block-item'>
                    <InfoBlock numberInfo='01' text='Заповніть форму на сайті'/>
                    <InfoBlock numberInfo='02' text='Розгляд вашої заявки'/>
                    <InfoBlock numberInfo='03' text='Очікування зворотнього зв’язку'/>
                    <InfoBlock numberInfo='04' text='Ура! Ви в команді'/>
                </div>
            </div>
        </div>
    );
};

export default BecomeAPerformer;