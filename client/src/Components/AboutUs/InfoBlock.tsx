import React, {FC} from 'react';
import './InfoBlock.scss';

type Props = {
    numberInfo: string;
    text: string;
}
const InfoBlock: FC<Props> = ({numberInfo, text}) => {
    return (
        <div className='wrapper-block'>
            <div className='block-item'>
                <p>{text}</p>
                <span>{numberInfo}</span>
            </div>
        </div>
    );
};

export default InfoBlock;