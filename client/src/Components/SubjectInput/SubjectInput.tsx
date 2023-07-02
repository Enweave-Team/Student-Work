import React, { useState } from 'react';
import './SubjectInput.scss';

interface SubjectInput {
    label: string;

}

const InputWithInfo: React.FC<SubjectInput> = ({ label }) => {
    const [inputValue, setInputValue] = useState('');
    const [showInfo, setShowInfo] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setShowInfo(true);
    };


    return (
        <div onSubmit={handleSubmit} className="input-with-info-container">
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Введите информацию"
                />
                <button type="submit">Отправить</button>
            </div>
            {showInfo && <p className="info-message">Введенная информация: {inputValue}</p>}
        </div>
    );
};

export default InputWithInfo;