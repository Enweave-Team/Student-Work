import React, {useState} from 'react';
import './PerformerForm.scss';
import Dropdown from "../Dropdown/Dropdown";
import Phone from "../Phone/Phone";
import Button from "../Button/Button";
import SubjectInput from "../SubjectInput/SubjectInput";

const PerformerForm = () => {

    const [select, setSelect] = useState('Введіть свою спеціальність')

    const subjects = ['Системный анализ','Управление данными', 'Историк']

    const dropdownStyles: React.CSSProperties = {
        width: "100%",
    }

    return (
        <form className='wrapper-performer-form'>
            <span className='span-sub-article'>Надайте інформацію <span className='span-br'>про кваліфікацію</span></span>
            <div className='performer-form-item'>
                <p>Розкажіть про ваші професійні навички і надайте контакти для того, щоб <span className='span-br'>ми могли з вами зв’язатися.</span></p>
                <Dropdown styles={dropdownStyles} article='Спеціальність' selected={select} setSelected={setSelect} options={subjects}/>
                <div><Phone label='Номер телефону'/></div>
                <SubjectInput label='Виконувані предмети'/>
                <div className='button-performer'><Button text='Подати заявку'/></div>
            </div>
        </form>
    );
};

export default PerformerForm;