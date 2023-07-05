import React, {useEffect} from 'react';
import './Performer.scss';
import {Link} from "react-router-dom";
import WhyWe from "../../Components/WhyWe/WhyWe";
import {PerformerData} from "./PerformerData";
import Footer from "../../Components/Footer/Footer";
import BecomeAPerformer from "../../Components/BecomeAPerformer/BecomeAPerformer";
import PerformerForm from "../../Components/PerfrormerForm/PerformerForm";
import HeaderSample from "../../Components/ArticleSample/HeaderSample";

interface PageProps {
    onPageChange: (page: string) => void;
}

const Performer = ({onPageChange}: PageProps) => {

    useEffect(() => {
        onPageChange('Стати виконавцем');
    }, [onPageChange]);

    const text = ['Student Helper — це хороший спосіб збільшити свої доходи, працюйте вдома у зручний для Вас час.']


    return (
        <div className='wrapper-performer'>
            <HeaderSample text={text} buttonText='Стати виконавцем' article='Стати виконавцем'/>
            <WhyWe data={PerformerData}/>
            <BecomeAPerformer />
            <PerformerForm />
            <Footer/>
        </div>
    );
};

export default Performer;