import React, {useState} from 'react';
import './CostCalc.scss';
import Dropdown from "../Dropdown/Dropdown";
import Phone from "../Phone/Phone";
import {Calendar} from "../Calendar";

import CustomInput from "../CustomInput/CustomInput";
import Range from "../Range/Range";
import File from "../File/File";
import OrderResult from "../OrderResult/OrderResult";



const CostCalc = () => {
    const [selected, setSelected] = useState("Выберите предмет")
    const [selectedWork, setSelectedWork] = useState('Выберите тип работы')
    const [valueEmail, setValueEmail] = useState('')
    const [valueWork, setValueWork] = useState('')

    const workOption = ['Диплом', 'Курсовая работа', 'Реферат', 'Научная работа']
    const options = ['Математика', 'Физика', 'История', 'Философия']


    const handlerChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueEmail(event.target.value)
    }

    const handlerChangeWork = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueWork(event.target.value)
    }
    return (
        <div className='wrapper-costCalc'>
            <div className='work-article'>
                <Dropdown article='Дисципліна' options={options} selected={selected} setSelected={setSelected}/>
                <Dropdown article='Тип роботи' options={workOption} selected={selectedWork}
                          setSelected={setSelectedWork}/>
            </div>
            <div className='date-pages'>
                <div className="date-field">
                    <Calendar label={'Срок'}/>
                </div>
                <CustomInput article='E-mail' type='text' value={valueEmail} change={handlerChangeEmail}/>

            </div>
            <CustomInput article='Тема роботи' type='text' value={valueWork} change={handlerChangeWork}/>
            <div className='phone'>
                <Phone label='Номер телефону'/>
            </div>
            <div className="additional">
                <Range _min={0} _max={100} _step={1} label={'Оригінальність роботи'} symbol={'%'}/>
                <Range _min={0} _max={100} _step={1} label={'Кількість сторінок'} symbol={' стр'}/>
            </div>
            <div className="file-field">
                <File/>
            </div>
            <div>
                <OrderResult label={"Вартість роботи"}/>
            </div>
        </div>
    );
};

export default CostCalc;
