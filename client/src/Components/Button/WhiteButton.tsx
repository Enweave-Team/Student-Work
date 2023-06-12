import React, {FC} from 'react';
import './WhiteButton.scss';
type Props = {
    text: string;
}
const WhiteButton: FC<Props>= ({text}) => {
    return (
        <div className='white-button-style'>
            <p>{text}</p>
        </div>
    );
};

export default WhiteButton;