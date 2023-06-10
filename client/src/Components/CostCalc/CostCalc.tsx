
import React, {useState} from 'react';
import './CostCalc.scss';
import Dropdown from "../Dropdown/Dropdown";
import DropdownWork from "../Dropdown/DropdownWork/DropdownWork";
import Phone from "../Phone/Phone";


const CostCalc = () => {
    const [selected, setSelected] = useState("Выберите предмет")
    const [selectedWork, setSelectedWork] = useState('Выберите тип работы')
    const [selectedAmount, setSelectedAmount] = useState('Выберите количество страниц')
    const [value, setValue] = useState('')

    const workOption = ['Диплом', 'Курсовая работа', 'Реферат', 'Научная работа']
    const options = ['Математика', 'Физика', 'История', 'Философия']
    const amountPages = [1, 2, 5, 8, 15, 25, 35, 50]


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

                <p>Срок</p>
                <input type="datetime-local"/>
            </div>
            <div><p>Тема роботи</p>
                <input
                    className='themeInput'
                    type="text"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </div>
            <div className='email-phone'>
                <div>
                    <p>Телефон</p>
                    <Phone/>
                </div>
                <div>
                    <p>E-mail</p>
                    <input
                        className='themeInput'
                        type="text"
                        value={value}
                        onChange={event => setValue(event.target.value)}
                    />
                </div>
=======
import React from 'react';
import './CostCalc.scss';
import Dropdown from "../Dropdown/Dropdown";

const CostCalc = () => {
    return (
        <div className='wrapper-costCalc'>
            <div>
                <p>Дисципліна</p>
                <Dropdown text='Виберіть предмет'/>
            </div>
            <div>
                <p>Тип роботи</p>
                <Dropdown text='Виберіть тип роботи'/>
>>>>>>> 16357f74044352440f19e9c6ae196e9a5b2abbce
            </div>
        </div>
    );
};

export default CostCalc;