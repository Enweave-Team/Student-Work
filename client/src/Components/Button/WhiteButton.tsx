import React, {FC} from 'react';
import './WhiteButton.scss';
type Props = {
    text: string;
}
const WhiteButton: FC<Props>= ({text}) => {
    return (
        <button className='white-button-style'>
           <span>{text}</span>
        </button>
    );
};

export default WhiteButton;