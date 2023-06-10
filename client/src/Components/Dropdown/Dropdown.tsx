<<<<<<< HEAD
import React, {useState} from 'react';
import './Dropdown.scss';
import {ReactComponent as VectorInput} from "../../assets/VectorSelect.svg";


interface Props {
    article: string;
    selected: string | number;
    setSelected: any;
    options: string[] | number[];
}

const Dropdown = ({setSelected, selected, options, article}: Props) => {
    const [isActive, setIsActive] = useState(false);


    return (
        <div className='dropdown'>
            <span>{article}</span>
            <div className={isActive ? 'overlap is-active' : 'overlap'} onClick={(e) => setIsActive(false)}></div>
            <div className='dropdown-btn' onClick={() => {
                setIsActive(!isActive)
            }}>
                {selected}
                <span><VectorInput/></span>
            </div>
            {isActive && (
                <div className='dropdown-content'>
                    {options.map((option, index) => (
                        <div key={index} onClick={(e) => {
                            setSelected(option)
                            setIsActive(false)
                        }}
                             className='dropdown-item'
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
=======
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
>>>>>>> 16357f74044352440f19e9c6ae196e9a5b2abbce
        </div>
    );
};

export default Dropdown;