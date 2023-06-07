import React, {useState} from 'react';
import '../Dropdown.scss';
import {ReactComponent as VectorInput} from "../../../assets/VectorSelect.svg";


type Props = {
    selectedWork: string;
    setSelectedWork: any;
    options: any[]
}
const DropdownWork = ({ selectedWork, setSelectedWork}: Props) => {
    const workOption = ['Диплом', 'Курсовая работа', 'Реферат', 'Научная работа',]
    const [isActive, setIsActive] = useState(false);

    return (
        <div className='dropdown'>
            <div className='dropdown-btn' onClick={() => {
                setIsActive(!isActive)
            }}>
                {selectedWork}
                <span><VectorInput/></span>
            </div>
            {isActive && (
                <div className='dropdown-content'>
                    {workOption.map((option, index) => (
                        <div key={index} onClick={(e) => {
                            setSelectedWork(option)
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

export default DropdownWork;