import React from 'react';
import './Dropdown.scss';
type Props = {
    text: string | number;
}
const Dropdown = ({text}: Props) => {
    return (
        <div className='dropdown'>
            <div className='dropdown-btn'>
                {text}
            </div>
            <div className='dropdown-content'>
                <div className='dropdown-item'>
                    Математика
                </div>
                <div className='dropdown-item'>
                    Фiзика
                </div>
            </div>
        </div>
    );
};

export default Dropdown;