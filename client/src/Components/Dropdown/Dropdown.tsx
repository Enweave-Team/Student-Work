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
        <div className='dropdown-wrapper'>
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
        </div>
    );
};

export default Dropdown;