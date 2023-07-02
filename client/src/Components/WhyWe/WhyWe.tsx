import React from 'react';
import './WhyWe.scss';

interface DataItem {
    text: string;
}

interface DataListProps {
    data: DataItem[];
}
const WhyWe = ({data}: DataListProps) => {
    return (
        <div className='wrapper-why'>
            <span className='span-sub-article'>Чому саме ми?</span>
            <ul className='why-item'>
                {data.map((text, index) => (
                    <li key={index}>
                        <p>{text.text}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WhyWe;