import React, {useEffect} from 'react';
import './Performer.scss';
import {Link} from "react-router-dom";
import WhyWe from "../../Components/WhyWe/WhyWe";
import {PerformerData} from "./PerformerData";
import Footer from "../../Components/Footer/Footer";
import BecomeAPerformer from "../../Components/BecomeAPerformer/BecomeAPerformer";
import PerformerForm from "../../Components/PerfrormerForm/PerformerForm";

interface PageProps {
    onPageChange: (page: string) => void;
}

const Performer = ({onPageChange}: PageProps) => {

    useEffect(() => {
        onPageChange('Стати виконавцем');
    }, [onPageChange]);

    return (
        <div className='wrapper-performer'>
            <Link to='/performer'></Link>
            <WhyWe data={PerformerData}/>
            <BecomeAPerformer />
            <PerformerForm />
            <Footer/>
        </div>
    );
};

export default Performer;