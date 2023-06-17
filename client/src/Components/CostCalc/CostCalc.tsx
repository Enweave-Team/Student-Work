import React, {useState} from 'react';
import './CostCalc.scss';
import Dropdown from "../Dropdown/Dropdown";
import Phone from "../Phone/Phone";
import {Calendar} from "../Calendar";
import {formatDate} from "../../utils/helpers/date";
import CustomInput from "../CustomInput/CustomInput";


const CostCalc = () => {
    const [selected, setSelected] = useState("Выберите предмет")
    const [selectedWork, setSelectedWork] = useState('Выберите тип работы')
    const [selectedAmount, setSelectedAmount] = useState('Выберите количество страниц')
    const [valueEmail, setValueEmail] = useState('')
    const [valueWork, setValueWork] = useState('')

    const [selectedDate, setSelectedDay] = React.useState(new Date());
    const workOption = ['Диплом', 'Курсовая работа', 'Реферат', 'Научная работа']
    const options = ['Математика', 'Физика', 'История', 'Философия']
    const amountPages = [1, 2, 5, 8, 15, 25, 35, 50]

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
                <Dropdown article='Кількість сторінок' options={amountPages} selected={selectedAmount}
                          setSelected={setSelectedAmount}/>

                <div>
                    <p>Срок</p>
                    <div className='date-container'>{formatDate(selectedDate, 'DDD DD MMM YYYY')}</div>
                    <Calendar selectedDate={selectedDate} selectDate={(date) => setSelectedDay(date)}/>
                </div>
            </div>
            <CustomInput article='Тема роботи' type='text' value={valueWork} change={handlerChangeWork}/>
            <div className='email-phone'>
                <Phone label='Телефон'/>
                <CustomInput article='E-mail' type='text' value={valueEmail} change={handlerChangeEmail}/>
            </div>
        </div>
    );
};

export default CostCalc;