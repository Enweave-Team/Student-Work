import React from 'react';
import './Phone.scss';

interface PhoneProps {
    label?: string
}

const Phone: React.FC<PhoneProps> = ({label}) => {

    return (
        <>
            <span>{label}</span>
            <div className="phone-container">

                <div className="phone-dropdown">
                    <div className="phone-list">

                    </div>
                </div>
                <div className="phone-field">

                    <input
                        className='themeInput'
                        type="number"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                </div>

            </div>
        </>
)
    ;
};

export default Phone;
