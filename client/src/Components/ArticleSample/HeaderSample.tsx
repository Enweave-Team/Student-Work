import React from 'react';
import Button from "../Button/Button";
import './HeaderSample.scss';


type Props = {
    text: string[];
    buttonText: string;
    article: string[] | string;
}
const HeaderSample = ({text, buttonText, article}:Props) => {
    return (
        <div className='main-text'>
            <div className='main-article-wrapper'><span className='span-article'>{article}</span></div>
            <p>{text}</p>
            <Button text={buttonText}/>
        </div>
    );
};

export default HeaderSample;