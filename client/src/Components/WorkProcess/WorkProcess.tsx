import React from 'react';
import {ReactComponent as Process} from "../../assets/Group 68.svg";
import "./WorkProcess.scss";

const WorkProcess = () => {
    return (
        <div className="work-process-wrapper">
            <span className='span-article'>Процес виконання
                замовлення</span>
            <div className="work-process-container">
                <Process/>
                <div>
                    <span>Завпонюєте форму</span>
                    <span>Консультант уточнює деталі через Telegram</span>
                    <span>Консультант виконує роботу</span>
                    <span>Ви отримуєте готову роботу</span>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;