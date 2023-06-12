import React from 'react';
import './Phone.scss';
interface PhoneProps {
    label?: string
}

const Phone: React.FC<PhoneProps> = ({label}) => {

    return (
        <div className="phone-container">
            <span>{label}</span>

            <input
                className='themeInput'
                type="number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            />
        </div>
    );
};

export default Phone;