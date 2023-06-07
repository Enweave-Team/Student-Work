import React from 'react';
import './Button.scss';
type Props = {
    text: string | number;
}
const Button = ( { text }: Props) => {
    return (
        <button className='button_style'>
            {text}
        </button>
    );
};

export default Button;