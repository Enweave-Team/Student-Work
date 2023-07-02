import React from 'react';
import Button from "../Button/Button";
import './HeaderSample.scss';


type Props = {
    text: string[];
    buttonText: string;
    article: string[];
}
const HeaderSample = ({text, buttonText, article}:Props) => {
    return (
        <div className='main-text'>
            <span className='span-article'>{article}</span>
            <p>{text}</p>
            <Button text={buttonText}/>
        </div>
    );
};

export default HeaderSample;