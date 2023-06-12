import React from 'react';
import './Button.scss';
type Props = {
    text: string | number;
    onClick?: any;
}
const Button = ( { text, onClick }: Props) => {
    return (
        <button onClick={onClick} className='button_style'>
            {text}
        </button>
    );
};

export default Button;